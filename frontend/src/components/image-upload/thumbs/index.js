import React from 'react'
import PropTypes from 'prop-types'

import Thumbs, { Thumb } from './thumbs.styles'

const ThumbComponent = ({ thumb }) => {
  return (
    <Thumb>
      <Thumb.Image src={thumb.preview}></Thumb.Image>
    </Thumb>
  )
}

ThumbComponent.propTypes = {
  thumb: PropTypes.object.isRequired
}

const ThumbListComponent = ({ thumbs }) => {
  return (
    <Thumbs>
      <Thumbs.Text>Preview:</Thumbs.Text>
      <Thumbs.List>
        {thumbs.map((thumb, i) => (
          <ThumbComponent key={i} thumb={thumb} />
        ))}
      </Thumbs.List>
    </Thumbs>
  )
}

ThumbListComponent.propTypes = {
  thumbs: PropTypes.arrayOf(PropTypes.object)
}

export default ThumbListComponent
