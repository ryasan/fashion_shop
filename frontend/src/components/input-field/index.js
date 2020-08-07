import React from 'react'
import PropTypes from 'prop-types'
import { capitalCase } from 'change-case'

import Field from './input-field.styles'

const InputFieldComponent = ({
  field,
  onChange,
  loading,
  theme,
  className
}) => (
  <Field theme={theme} className={className}>
    <Field.Icon name={field.icon} theme={theme} />
    <Field.Input
      placeholder={capitalCase(field.name)}
      type={field.type}
      name={field.name}
      value={field.value}
      disabled={loading}
      onChange={onChange}
      theme={theme}
    />
  </Field>
)

InputFieldComponent.propTypes = {
  className: PropTypes.string,
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  theme: PropTypes.string.isRequired
}

export default InputFieldComponent
