import styled from 'styled-components'

import { Button, Form as FormStyles } from '../../../shared/elements'
import { btns } from '../../../shared/styles'
import InputField from '../../input-field'

const Form = styled(FormStyles)`
  box-shadow: var(--box-shadow-all-around);
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
`

Form.LeftColumn = styled.div`
  grid-column: 1/2;
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

Form.RightColumn = styled.div`
  grid-column: 2/3;
  height: 100%;
  outline-color: white;
`

Form.MultipleChoice = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

Form.FullWidth = styled.div`
  grid-column: 1/3;
`

export const ProductImageUpload = styled.div`
  min-height: 10rem;
  position: relative;
`

export default Form
