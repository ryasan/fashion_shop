import React, { useReducer } from 'react'
import { constantCase, camelCase } from 'change-case'

import UpdateProduct, { Form } from './product-update.styles'
import ErrorBoundary from '../../error-boundary'
import InputFields from '../../form/input-fields'
import AvailableSizesTable from './available-sizes-table'
import CategorySelect from './category-select'
import Loader from '../../loader'
import ExtraFlagsTable from './extra-flags-table'
import { H3, Button } from '../../../elements'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { hasPermission } from '../../../utils'
import { ADMIN, ITEM_UPDATE } from '../../../types/permission-types'
import {
  TITLE,
  DESCRIPTION,
  PRICE,
  SKU,
  STYLE,
  CATEGORY,
  AVAILABLE_SIZES,
  IS_AVAILABLE,
  IS_FREE_SHIPPING,
  IS_FEATURED
} from '../../../types/product-update-types'
import { useUpdateProductMutation } from '../../../graphql/product/hooks'

const reducer = (state, action) => {
  const { payload, type } = action
  const target = camelCase(type)

  switch (type) {
    case TITLE:
    case DESCRIPTION:
    case PRICE:
    case SKU:
    case STYLE:
    case IS_AVAILABLE:
    case IS_FREE_SHIPPING:
    case IS_FEATURED:
    case CATEGORY:
    case AVAILABLE_SIZES:
      return { ...state, [target]: payload }
    default:
      return state
  }
}

const ProductUpdateForm = ({
  product,
  updateProduct,
  updateProductData,
  loading,
  me
}) => {
  const { id, __typename, ...rest } = product
  const [state, dispatch] = useReducer(reducer, rest)

  const handleTextChange = e => {
    dispatch({
      type: constantCase(e.target.name),
      payload: e.target.value
    })
  }

  const handleFlagChange = e => {
    const checkbox = e.target
    dispatch({
      type: constantCase(e.target.value),
      payload: checkbox.checked
    })
  }

  const handleCategoryChange = payload => {
    dispatch({ type: CATEGORY, payload })
  }

  const handleSizeChange = e => {
    const checkbox = e.target

    const payload = checkbox.checked
      ? [...state.availableSizes, checkbox.value]
      : state.availableSizes.filter(p => p !== checkbox.value)

    dispatch({ type: AVAILABLE_SIZES, payload })
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateProduct({
      variables: {
        where: { id },
        data: {
          ...state,
          ...(state.photos && { photos: { set: state.photos } }),
          availableSizes: { set: state.availableSizes }
        }
      }
    })
  }

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
      type: 'text',
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

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  if (hasPermission(me, [ADMIN, ITEM_UPDATE])) {
    return (
      <Form method='post' onSubmit={handleSubmit}>
        <H3>Product Update</H3>
        <Form.Fieldset>
          <InputFields
            fields={fields}
            onChange={handleTextChange}
            loading={loading}
          />
        </Form.Fieldset>
        <Form.MultipleChoice>
          <CategorySelect onChange={handleCategoryChange} />
          <AvailableSizesTable
            availableSizes={state.availableSizes}
            onChange={handleSizeChange}
          />
          <ExtraFlagsTable
            flagMap={{
              isAvailable: state.isAvailable,
              isFreeShipping: state.isFreeShipping,
              isFeatured: state.isFeatured
            }}
            onChange={handleFlagChange}
          />
          {/* update photos */}
        </Form.MultipleChoice>
        <Form.SubmitButton>
          <Button disabled={loading}>Updat{loading ? 'ing...' : 'e'}</Button>
        </Form.SubmitButton>
      </Form>
    )
  }

  return null
}

const ProductUpdateComponent = ({ product }) => {
  const userInfo = useCurrentUserQuery() // prettier-ignore
  const [updateProduct, updateProductInfo] = useUpdateProductMutation() // prettier-ignore

  return (
    <UpdateProduct>
      <ErrorBoundary error={userInfo.error || updateProductInfo.error}>
        {userInfo.loading ? (
          <Loader color='white' size='small' />
        ) : (
          <ProductUpdateForm
            product={product}
            updateProduct={updateProduct}
            updateProductData={updateProductInfo.data}
            loading={updateProductInfo.loading}
            me={userInfo.data.me}
          />
        )}
      </ErrorBoundary>
    </UpdateProduct>
  )
}

export default ProductUpdateComponent
