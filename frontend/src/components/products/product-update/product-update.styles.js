import styled from 'styled-components'

import FormStyles from '../../form'
import { Button } from '../../../elements'

const UpdateProduct = styled.div`
  width: 100%;
  margin-top: 4rem;
`

const Form = styled(FormStyles)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

Form.Fieldset = styled.fieldset`
  grid-column: 1/2;
`

Form.MultipleChoice = styled.div`
  grid-column: 2/3;
`

Form.SubmitButton = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  button {
    width: 40rem;
  }
`

export { Form }
export default UpdateProduct
