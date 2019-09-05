import React, { createRef } from 'react'
import { registerSwedify } from '../swedifyPlugin'
import $ from 'jquery'

registerSwedify()

export class Swedify extends React.Component {
  ref = createRef()
  componentDidMount() {
    // eslint-disable-next-line react/no-string-refs
    $(this.refs.toBeSwedified).swedify()
  }
  render() {
    // eslint-disable-next-line react/no-string-refs
    return <div ref="toBeSwedified">{this.props.children}</div>
  }
}
