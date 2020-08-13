import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

import ImageUpload, { Upload } from './image-upload.styles'
import ThumbList from './thumbs'

const ImageUploadComponent = ({ onUpload, isLoading }) => {
  const [previews, setPreviews] = useState([])

  const onDrop = useCallback(newFiles => {
    onUpload(newFiles)
    setPreviews(acceptedFiles => {
      return [
        ...acceptedFiles,
        ...newFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file)
        }))
      ]
    })
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
      {previews.length > 0 && <ThumbList thumbs={previews} />}

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

export default ImageUploadComponent
