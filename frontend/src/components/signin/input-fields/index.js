import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../icons'
import InputField from './input-fields.styles'
import { Input } from '../../../elements'

const InputFieldsComponent = ({ fields, loading, handleOnChange }) => {
  return Object.values(fields).map((f, i) => (
    <InputField key={i}>
      <Icon name={f.icon} />
      <Input
        placeholder={f.name}
        type={f.type}
        name={f.name}
        value={f.value}
        disabled={loading}
        onChange={handleOnChange}
      />
    </InputField>
  ))
}

InputFieldsComponent.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  handleOnChange: PropTypes.func.isRequired
}

export default InputFieldsComponent
