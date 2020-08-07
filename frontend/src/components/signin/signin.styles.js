import styled from 'styled-components'

import { Span, Button, Form as StyledForm } from '../../shared/elements'
import { btns } from '../../shared/styles'
import InputField from '../../components/input-field'
import headerBg from '../../static/main-red.svg'

const Signin = styled.div`
  align-content: space-between;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  left: 50%;
  margin: 5% 0;
  min-height: 45rem;
  padding-bottom: 2.4rem;
  position: relative;
  transform: translateX(-50%);
  width: 40rem;
`

export const Form = styled(StyledForm)`
  flex: 1;
  padding-bottom: 2.4rem;
`

export const Header = styled.div`
  align-items: center;
  background: url(${headerBg}) center center no-repeat;
  background-size: cover;
  display: flex;
  height: 17rem;
  overflow: hidden;
  width: 100%;
`

Form.Fieldset = styled.div`
  padding: 3rem 3rem 0;
`

Form.HeaderText = styled(Span)`
  display: block;
  margin: 2rem 0;
`

Form.InputField = styled(InputField)`
  margin-bottom: 2rem;
`

Form.FeedbackMessage = styled(Span)`
  display: block;
  margin: 2.4rem 0;
  text-align: center;
`

Form.SubmitBtn = styled(Button)`
  ${btns.red}
  width: 100%;

  &:hover,
  &:active {
    ${btns.lightRed}
  }
`

export default Signin
