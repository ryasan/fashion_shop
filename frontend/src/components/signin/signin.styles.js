import styled from 'styled-components'

import StyledForm from '../form'
import { Span, Button } from '../../elements'

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
  display: flex;
  height: 15rem;
  overflow: hidden;
  width: 100%;

  svg {
    transform: scale(2) translateY(1.4rem);
  }
`

Form.Fieldset = styled.div`
  padding: 3rem 3rem 0;
`

Form.HeaderText = styled(Span)`
  display: block;
  margin: 2rem 0;
`

Form.FeedbackMessage = styled(Span)`
  display: block;
  margin: 2.4rem 0;
  text-align: center;
`

Form.SubmitBtn = styled(Button)``

export default Signin
