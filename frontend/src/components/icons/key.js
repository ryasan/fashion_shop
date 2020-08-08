import React from 'react'

const KeyIcon = props => {
  switch (props.name) {
    case 'key-filled':
      return (
        <svg focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
        </svg>
      )
    case 'key-outlined':
    default:
      return (
        <svg
          {...props}
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path
            fill='currentColor'
            d='M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
          />
        </svg>
      )
  }
}

export default KeyIcon
