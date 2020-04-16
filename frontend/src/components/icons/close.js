import React from 'react'

const CloseIcon = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    width="82"
    height="64"
    viewBox="0 0 82 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 7L66 57"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <path
      d="M66.0005 7L16.0005 57"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
)

export default CloseIcon
