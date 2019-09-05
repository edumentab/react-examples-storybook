import React, { useRef, useEffect } from 'react'
import { registerSwedify } from '../swedifyPlugin'
import $ from 'jquery'

registerSwedify()

export const Swedify = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    $(ref.current).swedify(), [ref.current]
  })
  return <div ref={ref}>{children}</div>
}
