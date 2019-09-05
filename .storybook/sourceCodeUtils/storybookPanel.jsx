import React, { useEffect, useState, useCallback } from 'react'
import Highlighter from './storybookHighlighter'
import path from 'path'
import {
  MenuItem,
  Classes,
  Icon,
  Button,
  ControlGroup,
} from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

import '@blueprintjs/core/lib/css/blueprint.css'
import './storybookPanel.css'

const SourceCodePanel = props => {
  const { channel, rawSources: rawSourcesFromProps } = props
  const [fileState, setFileState] = useState({ history: [], idx: 0 })
  const filePath = fileState.history[fileState.idx] || ''
  const [rawSources, setRawSources] = useState(rawSourcesFromProps)
  const [showCompiled, setShowCompiled] = useState(false)
  const [query, setQuery] = useState('')
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
  const handleToggleCompiled = () => setShowCompiled(!showCompiled)
  useEffect(() => {
    channel.on('sourceCode/rawSources', newRawSources => {
      channel.removeListener('sourceCode/rawSources')
      setRawSources(newRawSources)
      if (filePath) {
        handleFileChange(filePath, newRawSources)
      }
    })
    return () => channel.removeListener('sourceCode/rawSources')
  }, [setRawSources])
  useEffect(() => {
    channel.on('sourceCode/selectedStory', p => {
      if (rawSources) {
        handleFileChange(p, rawSources)
      }
    })
    return () => channel.removeListener('sourceCode/selectedStory')
  }, [rawSources])

  const renderItem = useCallback(
    (option, { modifiers, handleClick }) => {
      const currentlySelected = filePath === option
      return (
        <MenuItem
          className={`${Classes.TEXT_SMALL} Editor_Menu_Item`}
          key={option}
          icon={
            <Icon icon={currentlySelected ? 'tick' : 'blank'} iconSize={10} />
          }
          active={modifiers.active}
          text={option}
          shouldDismissPopover={false}
          onClick={handleClick}
        />
      )
    },
    [filePath]
  )

  if (!props.active) return null
  if (!rawSources) return <span>...loading...</span>
  const files = Object.keys(rawSources).sort()
  const handleLinkClick = p => {
    const rel = path.join(filePath.replace(/\/[^/]*$/, '/'), p)
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
    <div style={{ padding: '5px' }} className="sourcePanel">
      <ControlGroup>
        <Button
          disabled={fileState.idx === 0}
          icon="step-backward"
          onClick={handleBack}
        />
        <Button
          disabled={fileState.idx === fileState.history.length - 1}
          icon="step-forward"
          onClick={handleForward}
        />
        <Select
          items={files.filter(option =>
            option.toLowerCase().includes(query.toLowerCase())
          )}
          itemRenderer={renderItem}
          onItemSelect={i => handleFileChange(i, rawSources)}
          popoverProps={{ minimal: true }}
          onQueryChange={setQuery}
        >
          <Button
            text={filePath || 'Select a file'}
            rightIcon="double-caret-vertical"
          />
        </Select>
        <Button
          active={showCompiled}
          text="Compiled"
          onClick={handleToggleCompiled}
        />
      </ControlGroup>
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
