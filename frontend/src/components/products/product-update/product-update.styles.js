import styled from 'styled-components'

import { H3, Button, Form as FormStyles } from '../../../shared/elements'
import { btns } from '../../../shared/styles'
import InputField from '../../input-field'

const UpdateProduct = styled.div`
  margin: 2rem auto;
  max-width: var(--max-width);
  min-height: 10rem;
  position: relative;
  width: 80%;
`

export const Form = styled(FormStyles)`
  box-shadow: var(--box-shadow);
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
`

Form.Title = styled(H3)`
  margin: 0;
`

Form.Fieldset = styled.div`
  grid-column: 1/2;
`

Form.FieldsetInner = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
`

Form.InputField = styled(InputField)`
  margin-bottom: 2rem;
`

Form.MultipleChoice = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  height: 30rem;
  justify-content: space-between;
`

Form.BtnGroup = styled.div`
  display: flex;
  grid-column: 1/3;
  justify-content: space-around;
`

Form.ActionBtn = styled(Button)`
  ${btns.white}
  width: 15rem;
  &:hover {
    ${btns.clearWhite}
  }

  &:first-child {
    ${btns.clearWhite}

    &:hover {
      ${btns.clearRed}
    }
  }
`

export default UpdateProduct
