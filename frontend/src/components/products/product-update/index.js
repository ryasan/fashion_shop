import React, { useEffect, useState } from 'react'
import { camelCase, capitalCase } from 'change-case'

import UpdateProduct, { Form } from './product-update.styles'
import ErrorBoundary from '../../error-boundary'
import ProductImageUpload from './image-upload'
import AvailableSizesTable from './available-sizes-table'
import CategorySelect from './category-select'
import Loader from '../../loader'
import ExtraFlagsTable from './extra-flags-table'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { hasPermission } from '../../../shared/utils'
import { ADMIN, ITEM_UPDATE } from '../../../types/permission-types'
import {
  useUpdateProductMutation,
  useDeleteProductMutation
} from '../../../graphql/product/hooks'
import { toast } from '../../toast'

const ProductUpdateForm = ({
  product,
  updateProduct,
  updateProductData,
  deleteProduct,
  deleteProductData,
  loading,
  me
}) => {
  const { id, __typename, ...rest } = product
  const [state, setState] = useState(rest)

  const handleTextChange = e => {
    setState(prev => ({
      ...prev,
      [camelCase(e.target.name)]: e.target.value
    }))
  }

  const handleFlagChange = e => {
    e.persist()

    const checkbox = e.target
    setState(prev => ({
      ...prev,
      [camelCase(e.target.value)]: checkbox.checked
    }))
  }

  const handleCategoryChange = category => {
    setState(prev => ({ ...prev, category }))
  }

  const handleSizeChange = e => {
    const checkbox = e.target
    const checkboxesPlus1 = [...state.availableSizes, checkbox.value]
    const checkboxesMinus1 = state.availableSizes.filter(
      p => p !== checkbox.value
    )

    setState(prev => ({
      ...prev,
      availableSizes: checkbox.checked ? checkboxesPlus1 : checkboxesMinus1
    }))
  }

  const handleOneProcessedImg = async ({ publicId }) => {
    state.images.push(publicId)
    setState(prev => ({ ...prev, images: state.images }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const variables = {
      where: { id },
      data: {
        ...state,
        availableSizes: { set: state.availableSizes },
        images: { set: state.images }
      }
    }

    updateProduct({ variables })
  }

  const handleDelete = () => {
    const ok = confirm('Are you sure you want to remove this product?')
    if (ok) deleteProduct({ variables: { where: { id } } })
  }

  useEffect(() => {
    if (updateProductData) {
      toast('Update successful.')
    }
  }, [updateProductData])

  useEffect(() => {
    if (deleteProductData) {
      toast('Delete successful.')
    }
  }, [deleteProductData])

  const fields = [
    {
      name: 'title',
      type: 'text',
      value: state.title,
      icon: 'title'
    },
    {
      name: 'description',
      type: 'text',
      value: state.description,
      icon: 'document'
    },
    {
      name: 'price',
      type: 'number',
      value: state.price,
      icon: 'money'
    },
    {
      name: 'style',
      type: 'text',
      value: state.style,
      icon: 'shopping-bag'
    }
  ]

  const flagMap = {
    isAvailable: state.isAvailable,
    isFreeShipping: state.isFreeShipping,
    isFeatured: state.isFeatured
  }

  if (hasPermission(me, [ADMIN, ITEM_UPDATE])) {
    return (
      <Form method='post' onSubmit={handleSubmit}>
        <Form.Title>Product Update</Form.Title>
        <Form.LeftColumn>
          <Form.Fieldset>
            <Form.FieldsetInner>
              {fields.map((field, i) => (
                <Form.InputField
                  key={i}
                  placeholder={capitalCase(field.name)}
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  disabled={loading}
                  onChange={handleTextChange}
                  icon={field.icon}
                  theme='dark'
                />
              ))}
            </Form.FieldsetInner>
          </Form.Fieldset>
          <ProductImageUpload
            handleOneProcessedImg={handleOneProcessedImg}
            currentImages={state.images}
            sku={product.sku}
          />
        </Form.LeftColumn>
        <Form.RightColumn>
          <Form.MultipleChoice>
            <CategorySelect
              onChange={handleCategoryChange}
              selected={state.category}
            />
            <AvailableSizesTable
              availableSizes={state.availableSizes}
              onChange={handleSizeChange}
            />
            <ExtraFlagsTable flagMap={flagMap} onChange={handleFlagChange} />
          </Form.MultipleChoice>
        </Form.RightColumn>
        <Form.BtnGroup>
          <Form.ActionBtn
            type='button'
            disabled={loading}
            onClick={handleDelete}
          >
            Delete Product
          </Form.ActionBtn>
          <Form.ActionBtn type='submit' disabled={loading}>
            Updat{loading ? 'ing...' : 'e'}
          </Form.ActionBtn>
        </Form.BtnGroup>
      </Form>
    )
  }

  return null
}

const ProductUpdateComponent = ({ product }) => {
  const userInfo = useCurrentUserQuery() // prettier-ignore
  const [updateProduct, updateProductInfo] = useUpdateProductMutation() // prettier-ignore
  const [deleteProduct, deleteProductInfo] = useDeleteProductMutation()

  return (
    <UpdateProduct>
      <ErrorBoundary
        error={
          userInfo.error || updateProductInfo.error || deleteProductInfo.error
        }
      >
        {userInfo.loading ? (
          <Loader color='white' size='small' />
        ) : (
          <ProductUpdateForm
            product={product}
            updateProduct={updateProduct}
            updateProductData={updateProductInfo.data}
            deleteProduct={deleteProduct}
            deleteProductData={deleteProductInfo.data}
            loading={updateProductInfo.loading || deleteProductInfo.loading}
            me={userInfo.data.me}
          />
        )}
      </ErrorBoundary>
    </UpdateProduct>
  )
}

export default ProductUpdateComponent
