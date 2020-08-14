import React from 'react'
import PropTypes from 'prop-types'

import Thumbs, { Thumb } from './thumbs.styles'

const ThumbComponent = ({ thumb, removeImage }) => (
  <Thumb onClick={() => removeImage(thumb.pubId)}>
    <Thumb.Image src={thumb.preview}></Thumb.Image>
  </Thumb>
)

ThumbComponent.propTypes = {
  thumb: PropTypes.object.isRequired
}

const returnPubIds = thumbs => thumbs.map(t => t.pubId)

const ThumbListComponent = ({ thumbs, setImages }) => {
  const removeImage = pubId => {
    const newPubIds = returnPubIds(thumbs).filter(id => {
      return id !== pubId
    })

    setImages(newPubIds)
  }

  return (
    <Thumbs>
      <Thumbs.Text>Click to remove:</Thumbs.Text>
      <Thumbs.List>
        {thumbs.map((thumb, i) => (
          <ThumbComponent key={i} thumb={thumb} removeImage={removeImage} />
        ))}
      </Thumbs.List>
    </Thumbs>
  )
}

ThumbListComponent.propTypes = {
  thumbs: PropTypes.arrayOf(PropTypes.object),
  setImages: PropTypes.func
}

export default ThumbListComponent
