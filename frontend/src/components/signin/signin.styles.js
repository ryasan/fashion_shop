import styled from 'styled-components'

import { Span, Button, Form as StyledForm } from '../../shared/elements'
import { btns } from '../../shared/styles'
import InputField from '../../components/input-field'
import headerBg from '../../static/main-red.svg'
import redTexture from '../../static/red-texture.png'

const Signin = styled.div`
  align-content: space-between;
  box-shadow: var(--box-shadow-full);
  display: flex;
  flex-direction: column;
  left: 50%;
  margin: 5% 0;
  min-height: 45rem;
  padding-bottom: 2.4rem;
  position: relative;
  transform: translateX(-50%);
  width: 40rem;
  z-index: 2;
`

export const Form = styled(StyledForm)`
  background: var(--dark);
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
  background: url(${redTexture});
  height: 5rem;
  position: relative;
  width: 100%;

  &::before {
    align-items: center;
    background: var(--dark);
    content: '${props => (props.disabled ? 'Submitting' : 'Submit')}';
    display: flex;
    height: calc(100% - 0.5rem);
    justify-content: center;
    left: 50%;
    padding: 1rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    width: calc(100% - 0.5rem);
  }

  &:hover {
    transform: scale(1.02);
    
    &::before {
      background: transparent;
    }
  }
`

export default Signin
