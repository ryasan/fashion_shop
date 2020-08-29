import React from 'react'
import PropTypes from 'prop-types'

import Field from './input-field.styles'

interface InputFieldInterface {
  onChange: (arg: any) => void
  disabled: boolean
  theme: string
  className: string
  placeholder: string
  type: string
  name: string
  value: string | number
  icon: string
}

const InputFieldComponent = ({
  onChange,
  disabled,
  theme,
  className,
  placeholder,
  type,
  name,
  value,
  icon
}: InputFieldInterface) => (
  <Field theme={theme} className={className}>
    <Field.Icon name={icon} theme={theme} />
    <Field.Input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      theme={theme}
    />
  </Field>
)

InputFieldComponent.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  theme: PropTypes.string.isRequired
}

export default InputFieldComponent
