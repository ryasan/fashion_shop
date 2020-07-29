import React from 'react'
import PropTypes from 'prop-types'
import { capitalCase } from 'change-case'

import Icon from '../../icons'
import Field from './input-fields.styles'
import { Input } from '../../../elements'

const InputField = ({ field, onChange, loading }) => (
  <Field>
    <Icon name={field.icon} />
    <Input
      placeholder={capitalCase(field.name)}
      type={field.type}
      name={field.name}
      value={field.value}
      disabled={loading}
      onChange={onChange}
    />
  </Field>
)

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

const InputFieldsComponent = props => {
  return props.fields.map((field, i) => (
    <InputField key={i} field={field} {...props} />
  ))
}

InputFieldsComponent.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default InputFieldsComponent
