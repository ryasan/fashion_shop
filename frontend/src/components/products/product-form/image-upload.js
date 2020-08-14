import React, { useState } from 'react'

import { ProductImageUpload } from './product-update.styles'
import ImageUpload from '../../image-upload'

const createPublicId = (sku, currentImages) => {
  return `${sku}-${currentImages.length + 1}`
}

const ProductImageUploadComponent = ({
  setImages,
  remoteImagesLoading,
  currentImages,
  sku
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const processOneImgFile = async acceptedFile => {
    setIsLoading(true)
    const data = new FormData() // eslint-disable-line
    const pubId = createPublicId(sku, currentImages)
    data.append('file', acceptedFile[0])
    data.append('upload_preset', 'fashion_shop')
    data.append('public_id', pubId)

    // prettier-ignore
    const res = await fetch('https://api.cloudinary.com/v1_1/dbir6orpj/image/upload', { // eslint-disable-line
      method: 'POST',
      body: data
    })

    setImages([...currentImages, pubId])
    setIsLoading(false)
  }

  return (
    <ProductImageUpload>
      <ImageUpload
        onUpload={processOneImgFile}
        isLoading={isLoading || remoteImagesLoading}
        currentImages={currentImages}
        setImages={setImages}
      />
    </ProductImageUpload>
  )
}

export default ProductImageUploadComponent
