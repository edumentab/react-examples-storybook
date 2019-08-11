import React, { useEffect, useCallback, useState } from 'react'
import addons, { types } from '@storybook/addons'
import Highlighter from './storybookHighlighter'
import path from 'path'

const SourceCodePanel = props => {
  const { channel, storybookAPI, rawSources: rawSourcesFromProps } = props
  const [fileState, setFileState] = useState({ history: [], idx: 0 })
  const filePath = fileState.history[fileState.idx] || ''
  const [rawSources, setRawSources] = useState(rawSourcesFromProps)
  const [showCompiled, setShowCompiled] = useState(false)
  const handleFileChange = (path, rs) => {
    if (rs) {
      const actualPath = matchPathToSource(path, rs)
      if (actualPath && actualPath !== filePath) {
        const newHistory = fileState.history
          .slice(0, fileState.idx + 1)
          .concat(actualPath)
        const newIdx = newHistory.length - 1
        setFileState({ history: newHistory, idx: newIdx })
      } else {
        console.warn(
          'WARNING! Selected source path not found among rawSources',
          path
        )
      }
    }
  }
  const handleDropdownChange = e => handleFileChange(e.target.value, rawSources)
  const handleToggleCompiled = e => setShowCompiled(e.target.checked)
  useEffect(() => {
    channel.on('sourceCode/rawSources', newRawSources => {
      channel.removeListener('sourceCode/rawSources')
      setRawSources(newRawSources)
      if (filePath) {
        handleFileChange(filePath, newRawSources)
      }
    })
    return () => channel.removeListener('sourceCode/selectedStory')
  }, [setRawSources])
  useEffect(() => {
    channel.on('sourceCode/selectedStory', p => {
      if (rawSources) {
        handleFileChange(p, rawSources)
      }
    })
    return () => channel.removeListener('sourceCode/rawSources')
  }, [rawSources])

  if (!props.active) return null
  if (!rawSources) return <span>...loading...</span>
  const files = Object.keys(rawSources).sort()
  const handleLinkClick = p => {
    const rel = path.join(filePath.replace(/\/[^\/]*$/, '/'), p)
    const found = ['/index.jsx', '/index.js', '.jsx', '.js', '.css', '']
      .map(suff => rel + suff)
      .find(p => !!rawSources[p])
    if (found) {
      handleFileChange(found, rawSources)
    } else {
      console.warn('WARNING - could not find corresponding file in list', rel)
    }
  }
  const handleBack = () =>
    setFileState({
      history: fileState.history,
      idx: Math.max(0, fileState.idx - 1),
    })
  const handleForward = () =>
    setFileState({
      history: fileState.history,
      idx: Math.min(fileState.idx + 1, fileState.history.length - 1),
    })
  return (
    <div style={{ padding: '5px' }}>
      <div>
        <label>
          Show compiled? {(!!showCompiled).toString()}{' '}
          <input
            type="checkbox"
            checked={showCompiled}
            onChange={handleToggleCompiled}
          />
        </label>
      </div>
      <button
        style={{ fontSize: 'initial', marginRight: '10px' }}
        onClick={handleBack}
        disabled={fileState.idx === 0}
      >
        ◀
      </button>
      <button
        onClick={handleForward}
        style={{ fontSize: 'initial', marginRight: '10px' }}
        disabled={fileState.idx === fileState.history.length - 1}
      >
        ▶
      </button>
      <select onChange={handleDropdownChange} value={filePath}>
        <option> ---- Select a file ---</option>
        {files.map(file => (
          <option value={file} key={file}>
            {file}
          </option>
        ))}
      </select>
      <Highlighter
        language={
          !showCompiled && filePath.match(/.css$/) ? 'css' : 'javascript'
        }
        code={
          (rawSources[filePath] || {})[showCompiled ? 'compiled' : 'raw'] || ''
        }
        onLinkClick={handleLinkClick}
      />
    </div>
  )
}

export default SourceCodePanel

function matchPathToSource(path, rawSources) {
  const files = Object.keys(rawSources)
  return files.find(file => file.includes(path) || path.includes(file))
}
