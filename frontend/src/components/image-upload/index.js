import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'

import ImageUpload, { Upload } from './image-upload.styles'
import ThumbList from './thumbs'
import { getThumbnail } from '../../shared/utils'

const ImageUploadComponent = ({
  onUpload,
  isLoading,
  currentImages,
  setImages
}) => {
  const previews = currentImages.map(pubId => ({
    preview: getThumbnail([pubId]),
    pubId: pubId
  }))

  const onDrop = useCallback(newFiles => {
    onUpload(newFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    multiple: true,
    disabled: isLoading,
    onDrop
  })

  useEffect(
    () => () => {
      previews.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [previews]
  )
  const classNames = isDragActive ? 'icon-active' : 'icon'

  return (
    <ImageUpload isDragActive={isDragActive}>
      {previews.length > 0 && (
        <ThumbList thumbs={previews} setImages={setImages} />
      )}

      <Upload>
        <ImageUpload.Text>Click or drag to upload:</ImageUpload.Text>
        {isLoading ? (
          <ImageUpload.Loader size='small' color='white' />
        ) : (
          <Upload.Inner {...getRootProps()}>
            <Upload.Input {...getInputProps()} />
            {isDragActive ? (
              <Upload.UploadIcon name='upload-filled' className={classNames} />
            ) : (
              <Upload.UploadIcon
                name='upload-outlined'
                className={classNames}
              />
            )}
          </Upload.Inner>
        )}
      </Upload>
    </ImageUpload>
  )
}

ImageUploadComponent.defaultProps = {
  currentImages: []
}

ImageUploadComponent.propTypes = {
  onUpload: PropTypes.func.isRequired,
  isUploading: PropTypes.func,
  currentImages: PropTypes.arrayOf(PropTypes.string)
}

export default ImageUploadComponent
