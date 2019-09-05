import React from 'react'
import { registerSwedify } from '../swedifyPlugin'
import $ from 'jquery'

registerSwedify()

// slight cheating since ref will be called after every render
export const Swedify = ({ children }) => (
  <div ref={el => $(el).swedify()}>{children}</div>
)
