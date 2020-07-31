import styled from 'styled-components'

import FormStyles from '../../form'
import { transparentButton } from '../../../elements'

const UpdateProduct = styled.div`
  width: 80%;
  max-width: var(--max-width);
  margin: 2rem auto;
  min-height: 10rem;
  position: relative;
  h3 {
    margin: 0;
  }
`

const Form = styled(FormStyles)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  box-shadow: var(--box-shadow);
  padding: 3rem;
`

Form.Fieldset = styled.fieldset`
  grid-column: 1/2;
`

Form.FieldsetInner = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  div:last-child {
    margin: 0;
  }
`

Form.MultipleChoice = styled.div`
  grid-column: 2/3;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

Form.SubmitButton = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: space-around;
  button {
    width: 20rem;
    &:first-child {
      ${transparentButton};
    }
  }
`

export { Form }
export default UpdateProduct
