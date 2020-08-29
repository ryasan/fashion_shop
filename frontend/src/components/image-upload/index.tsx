import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

import ImageUpload, { Upload } from './image-upload.styles'
import ThumbList from './thumbs'
import { getThumbnail } from '../../shared/utils'

const ImageUploadComponent = ({
  onUpload,
  isLoading,
  currentImages,
  setImages
}: {
  onUpload: (files: any[]) => void
  setImages: (images: string[]) => void
  isLoading: boolean
  currentImages: string[]
}) => {
  const previews = currentImages.map((pubId: string) => ({
    preview: getThumbnail([pubId]),
    pubId: pubId
  }))

  const onDrop = useCallback((newFiles) => {
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
      previews.forEach((file: { preview: string }) =>
        URL.revokeObjectURL(file.preview)
      )
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

export default ImageUploadComponent
