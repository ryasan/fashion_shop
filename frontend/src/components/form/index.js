import styled from 'styled-components'

import InputFields from './input-fields'
import { redInput, redButton } from '../../elements'

const Form = styled.form`
  width: 100%;
  padding: 0;
  fieldset {
    padding: 0;
    border: none;
    width: 100%;
  }
  input:not([type='submit']) {
    ${redInput};
    width: 100%;
  }

  button {
    ${redButton}
    height: 100%;
    width: 100%;
  }
`

Form.Fieldset = styled.fieldset`
  span {
    display: block;
    margin: 2rem 0;
  }
`

export { InputFields }
export default Form
