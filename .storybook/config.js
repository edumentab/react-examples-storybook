import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import sourceCodeDecorator from './sourceCodeUtils/storybookDecorator'

function loadStories() {
  const req = require.context('../src', true, /\.stories\.jsx?$/)
  addDecorator(withKnobs)
  addDecorator(jsxDecorator)
  addDecorator(sourceCodeDecorator)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
