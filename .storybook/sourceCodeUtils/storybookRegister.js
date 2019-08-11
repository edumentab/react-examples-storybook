import addonAPI, { types } from '@storybook/addons'
import Panel from './storybookPanel'
import React from 'react'

let currentId

addonAPI.register('edumentab/sourcecode', storybookAPI => {
  const channel = addonAPI.getChannel()
  let rawSources
  function fetchSources() {
    fetch('./rawSources.json')
      .then(response => response.json())
      .then(data => {
        if (!rawSources || currentId !== data.id) {
          currentId = data.id
          rawSources = data.files
          channel.emit('sourceCode/rawSources', data.files)
        }
      })
  }
  fetchSources()
  setInterval(fetchSources, 1000)
  addonAPI.add('edumentab/sourcecode/panel', {
    type: types.TAB,
    title: 'source',
    route: ({ storyId }) => `/sourceCode/${storyId}`,
    match: ({ viewMode }) => viewMode === 'sourceCode',
    render: ({ active }) => {
      return React.createElement(Panel, {
        channel: addonAPI.getChannel(),
        storybookAPI,
        active,
        rawSources,
      })
    },
  })
})
