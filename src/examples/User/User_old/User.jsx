import React from 'react'
import { user } from './_UserContext'

export const User = (props, context) => {
  return (
    <span>
      {context.user.name || 'Anonymous'}{' '}
      {context.user.loggedIn && '(authenticated)'}
    </span>
  )
}

User.contextTypes = { user }
