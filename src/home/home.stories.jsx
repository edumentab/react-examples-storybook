import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import imageFile from './frontpage.jpg'

const image = {
  src: imageFile,
  alt: 'my image',
}

storiesOf('home', module)
  .add('welcome!', () => (
    <button
      href="#"
      style={{
        maxWidth: '100%',
        display: 'block',
        textDecoration: 'none',
        cursor: 'pointer',
        border: 'none',
      }}
      onClick={linkTo('home', 'instructions')}
    >
      <img style={{ maxWidth: '100%' }} src={image.src} alt={image.alt} />
    </button>
  ))
  .add('instructions', () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <p>
        Welcome to (some of) the training materials for{' '}
        <a href="http://edument.se" target="_blank">
          Edument
        </a>
        's course in{' '}
        <a
          href="https://edument.se/en/education/categories/web-development-courses/advanced-react"
          target="_blank"
        >
          Advanced React
        </a>
        !
      </p>
      <p>
        There'll be more thorough instructions here eventually; for now, see the
        README file in the{' '}
        <a
          href="https://github.com/edumentab/react-examples-storybook"
          target="_blank"
        >
          Github repo
        </a>
        .
      </p>
    </div>
  ))
