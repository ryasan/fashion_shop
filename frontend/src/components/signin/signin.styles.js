import styled from 'styled-components'

import Form from '../form'
import Icon from '../icons'
import { Input, Small, A, P, Button } from '../elements'

const Signin = styled.div`
  width: 40rem;
  position: relative;
  margin: 5% 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.6);
  small {
    font-size: var(--small-font);
    cursor: pointer;
    width: 100%;
    text-align: center;
  }
  p {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

Signin.Form = Form
Signin.Link = A
Signin.SmallText = Small
Signin.MessageText = P
Signin.Icon = Icon
Signin.Input = Input
Signin.Submit = Button

Signin.Header = styled.div`
  background: url(${require('../../images/logo-royal.svg')}) center 30%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 25rem;
  width: 60%;
`

Signin.Fieldset = styled.fieldset``

Signin.Field = styled.div`
  height: 4rem;
  position: relative;
  margin-bottom: 2rem;
  svg {
    height: 100%;
    width: 3.5rem;
    background: var(--red);
    fill: var(--off-white);
    position: absolute;
    top: 50%;
    padding: 0.7rem;
    transform: translateY(-50%);
    border-radius: 3px;
  }
  &:nth-last-child(3),
  &:last-child {
    margin: 0;
  }
`

export default Signin
