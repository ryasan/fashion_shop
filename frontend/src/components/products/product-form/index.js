import React from 'react'
import { camelCase, capitalCase } from 'change-case'
import PropTypes from 'prop-types'

import Form from './product-form.styles'
import AvailableSizesTable from './available-sizes-table'
import CategorySelect from './category-select'
import ExtraFlagsTable from './extra-flags-table'
import {
  SHIRT,
  LONG_SLEEVE,
  HOODIE,
  ACCESSORY
} from '../../../types/category-types'

const ProductFormComponent = ({
  loading,
  leftComponentAddon,
  rightComponentAddon,
  fullWidthAddon,
  useState
}) => {
  const [state, setState] = useState

  const handleInputChange = e => {
    e.persist()
    const { name, value, type } = e.target
    setState(prevState => ({
      ...prevState,
      [camelCase(name)]: type === 'number' ? value.replace(/^0+/, '') : value
    }))
  }

  const handleFlagChange = e => {
    e.persist()

    const checkbox = e.target
    setState(prevState => ({
      ...prevState,
      [camelCase(e.target.value)]: checkbox.checked
    }))
  }

  const handleCategoryChange = category => {
    setState(prevState => ({ ...prevState, category }))
  }

  const handleSizeChange = e => {
    const checkbox = e.target
    const checkboxesPlus1 = [...state.availableSizes, checkbox.value]
    const checkboxesMinus1 = state.availableSizes.filter(
      p => p !== checkbox.value
    )

    setState(prevState => ({
      ...prevState,
      availableSizes: checkbox.checked ? checkboxesPlus1 : checkboxesMinus1
    }))
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

  return (
    <Form>
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
                onChange={handleInputChange}
                icon={field.icon}
                theme='dark'
              />
            ))}
          </Form.FieldsetInner>
        </Form.Fieldset>
        {leftComponentAddon && leftComponentAddon}
      </Form.LeftColumn>
      <Form.RightColumn>
        <Form.MultipleChoice>
          <CategorySelect
            onChange={handleCategoryChange}
            selected={state.category}
          />
          {[SHIRT, HOODIE, LONG_SLEEVE].includes(state.category) && (
            <AvailableSizesTable
              availableSizes={state.availableSizes}
              onChange={handleSizeChange}
            />
          )}
          <ExtraFlagsTable flagMap={flagMap} onChange={handleFlagChange} />
        </Form.MultipleChoice>
        {rightComponentAddon && rightComponentAddon}
      </Form.RightColumn>
      <Form.FullWidth>{fullWidthAddon && fullWidthAddon}</Form.FullWidth>
    </Form>
  )
}

ProductFormComponent.defaultProps = {
  useState: {
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
}

ProductFormComponent.propTypes = {
  initialState: PropTypes.object,
  loading: PropTypes.bool,
  productHandler: PropTypes.func,
  useState: PropTypes.array,
  leftComponentAddon: PropTypes.node,
  rightComponentAddon: PropTypes.node,
  fullWidthAddon: PropTypes.node
}

export default ProductFormComponent
