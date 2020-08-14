import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ProductCreate from './product-create.styles'
import ProductForm from '../product-form'
import ErrorBoundary from '../../error-boundary/index'
import ImageUpload from '../../image-upload'
import { useCreateProductMutation } from '../../../graphql/product/hooks'
import { ACCESSORY } from '../../../types/category-types'

const createPublicId = (sku, currentImages) => {
  return `${sku}-${currentImages.length + 1}`
}

const productInitialState = {
  isFreeShipping: false,
  isFeatured: false,
  isAvailable: true,
  price: 0,
  sku: '',
  style: '',
  title: '',
  description: '',
  category: ACCESSORY,
  availableSizes: [],
  images: []
}

const ProductCreateComponent = () => {
  const [createProduct, { data, loading, error }] = useCreateProductMutation()
  const [isLoading, setIsLoading] = useState(false)
  const [state, setState] = useState(productInitialState)

  const handleSubmit = e => {
    e.preventDefault()
    createProduct({
      variables: {
        data: {
          ...state,
          price: parseInt(state.price),
          availableSizes: { set: state.availableSizes },
          images: { set: state.images }
        }
      }
    })
  }

  const handleSetImages = images => {
    setState(prevState => ({ ...prevState, images }))
  }

  const handleUpload = async acceptedFiles => {
    setIsLoading(true)
    const data = new FormData() // eslint-disable-line
    const pubId = createPublicId(state.sku, state.images)
    data.append('file', acceptedFiles[0])
    data.append('upload_preset', 'fashion_shop')
    data.append('public_id', pubId)

    // prettier-ignore
    const res = await fetch('https://api.cloudinary.com/v1_1/dbir6orpj/image/upload', { // eslint-disable-line
      method: 'POST',
      body: data
    })

    handleSetImages([...state.images, pubId])
    setIsLoading(false)
  }

  useEffect(() => {
    setState(prevState => ({ ...prevState, sku: uuidv4() }))
  }, [data])

  return (
    <ErrorBoundary error={error}>
      <ProductCreate>
        <ProductCreate.Title>Create fresh new product</ProductCreate.Title>
        <ProductForm
          productHandler={handleSubmit}
          loading={loading}
          useState={[state, setState]}
          leftComponentAddon={
            <ImageUpload
              onUpload={handleUpload}
              isLoading={isLoading}
              currentImages={state.images}
              setImages={handleSetImages}
            />
          }
          fullWidthAddon={
            <ProductCreate.BtnGroup>
              <ProductCreate.ActionBtn onClick={handleSubmit}>
                {loading ? 'Submitting' : 'Submit'}
              </ProductCreate.ActionBtn>
            </ProductCreate.BtnGroup>
          }
        />
      </ProductCreate>
    </ErrorBoundary>
  )
}

export default ProductCreateComponent
