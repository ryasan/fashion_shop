import React, { useReducer } from 'react'

import UpdateProduct, { Form } from './product-update.styles'
import ErrorBoundary from '../../error-boundary'
import InputFields from '../../form/input-fields'
import Select from '../../select'
import { Button } from '../../../elements'
import { useCurrentUserQuery } from '../../../graphql/user/hooks'
import { hasPermission } from '../../../utils'
import { ADMIN, ITEM_UPDATE } from '../../../types/permission-types'
import {
  ACCESSORY,
  BEANIE,
  HOODIE,
  LONG_SLEEVE,
  SHIRT,
  SHORTS
} from '../../../types/category-types'
import {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
  XXL_LARGE
} from '../../../types/size-types'

const categoryOptions = [
  { value: ACCESSORY, name: 'Accessory' },
  { value: BEANIE, name: 'Beanie' },
  { value: HOODIE, name: 'Hoodie' },
  { value: LONG_SLEEVE, name: 'Long Sleeve' },
  { value: SHIRT, name: 'Shirt' },
  { value: SHORTS, name: 'Shorts' }
]
// const sizeOptions = [SMALL, MEDIUM, LARGE, X_LARGE, XXL_LARGE]

const reducer = (state, action) => {
  // const { payload, type } = action
  // switch (type) {
  //   case EMAIL:
  //     return createNewState({ state, type, payload })
  //   case TOGGLE_SIGNUP:
  //     return { ...initialState, isSignin: !state.isSignin }
  //   default:
  //     return state
  // }
}
export const ProductUpdateComponent = ({ product }) => {
  const { data, loading, error } = useCurrentUserQuery()

  if (!data || loading) {
    return null
  }
  const {
    id,
    availableSizes,
    isFreeShipping,
    isFeatured,
    isAvailable,
    photos,
    ...rest
  } = product

  // const [state, dispatch] = useReducer(reducer, product)

  const handleOnChange = () => {}

  const handleSubmit = () => {}

  const fields = [
    {
      name: 'title',
      type: 'text',
      value: 'title',
      icon: 'title'
    },
    {
      name: 'description',
      type: 'text',
      value: 'description',
      icon: 'document'
    },
    {
      name: 'price',
      type: 'text',
      value: 'price',
      icon: 'money'
    },
    {
      name: 'sku',
      type: 'text',
      value: 'sku',
      icon: 'fingerprint'
    },
    {
      name: 'style',
      type: 'text',
      value: 'style',
      icon: 'shopping-bag'
    }
  ]

  if (!hasPermission(data.me, [ADMIN, ITEM_UPDATE])) {
    return (
      <UpdateProduct>
        <ErrorBoundary error={error}>
          <Form method='post' onSubmit={handleSubmit}>
            <Form.Fieldset>
              <InputFields fields={fields} onChange={handleOnChange} loading />
            </Form.Fieldset>
            <Form.MultipleChoice>
              <Select
                options={categoryOptions}
                onChange={handleOnChange}
                label='Choose category'
              />
              {/* USE DROPDOWN category */}
              {/* update photos */}
              {/* USE TABLE available sizes */}
              {/* USE TABLE - update product is - free shipping, available, featured */}
            </Form.MultipleChoice>
            <Form.SubmitButton>
              <Button disabled={loading}>Submit</Button>
            </Form.SubmitButton>
          </Form>
        </ErrorBoundary>
      </UpdateProduct>
    )
  }

  return null
}

export default ProductUpdateComponent
