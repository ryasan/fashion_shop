import styled from 'styled-components'

import { redInput, redButton } from '../../elements'

const Form = styled.form`
  width: 100%;
  fieldset {
    border: none;
    padding: 2rem;
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

export default Form
