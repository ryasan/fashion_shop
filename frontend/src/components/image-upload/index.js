import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import ImageUpload, { Upload } from './image-upload.styles'

const ImageUploadComponent = ({ onImageDrop }) => {
  const onDrop = useCallback(onImageDrop, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const classNames = isDragActive ? 'icon-active' : 'icon'

  return (
    <ImageUpload isDragActive={isDragActive}>
      <ImageUpload.Text>Click or drag to upload:</ImageUpload.Text>
      <Upload {...getRootProps()}>
        <Upload.Input {...getInputProps()} />
        {isDragActive ? (
          <Upload.UploadIcon name='upload-filled' className={classNames} />
        ) : (
          <Upload.UploadIcon name='upload-outlined' className={classNames} />
        )}
      </Upload>
    </ImageUpload>
  )
}

export default ImageUploadComponent
