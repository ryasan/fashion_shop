import React from 'react'
import PropTypes from 'prop-types'

import Thumbs, { Thumb } from './thumbs.styles'

interface ThumbInterface {
  preview: string
  pubId: string
}

const ThumbComponent = ({
  thumb,
  removeImage
}: {
  thumb: ThumbInterface
  removeImage: (pubId: string) => void
}) => (
  <Thumb onClick={() => removeImage(thumb.pubId)}>
    <Thumb.Image src={thumb.preview}></Thumb.Image>
  </Thumb>
)

ThumbComponent.propTypes = {
  thumb: PropTypes.object.isRequired
}

const returnPubIds = (thumbs: ThumbInterface[]) => thumbs.map(t => t.pubId)

const ThumbListComponent = ({
  thumbs,
  setImages
}: {
  thumbs: ThumbInterface[]
  setImages: (pubIds: string[]) => void
}) => {
  const removeImage = (pubId: string) => {
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
