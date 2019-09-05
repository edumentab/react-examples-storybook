import React, { createRef } from 'react'
import { registerSwedify } from '../swedifyPlugin'
import $ from 'jquery'

registerSwedify()

export class Swedify extends React.Component {
  ref = createRef()
  componentDidMount() {
    $(this.ref.current).swedify()
  }
  render() {
    return <div ref={this.ref}>{this.props.children}</div>
  }
}
