import React from 'react'

import ImageUpload from '../../image-upload'

const ProductImageUploadComponent = ({ onImage }) => {
  const handleImageDrop = async acceptedFiles => {
    const data = new FormData() // eslint-disable-line
    data.append('file', acceptedFiles[0])
    data.append('upload_preset', 'fashion_shop')

    // prettier-ignore
    const res = await fetch(// eslint-disable-line 
      'https://api.cloudinary.com/v1_1/dbir6orpj/image/upload',
      {
        method: 'POST',
        body: data
      }
    )

    const file = await res.json()
    onImage({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    })
  }

  return <ImageUpload onImageDrop={handleImageDrop} />
}

export default ProductImageUploadComponent
