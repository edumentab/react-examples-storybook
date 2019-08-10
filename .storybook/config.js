import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { jsxDecorator } from 'storybook-addon-jsx'
import sourceCodeDecorator from './sourceCodeUtils/storybookDecorator'

function loadStories() {
  // we read test files too to show their source code, but we'll prevent
  // them from being executed in our webpack loader
  const req = require.context('../src', true, /\.stories\.jsx$|\.test\.jsx?/)
  addDecorator(withKnobs)
  addDecorator(jsxDecorator)
  addDecorator(sourceCodeDecorator)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
