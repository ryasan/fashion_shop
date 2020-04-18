import styled from 'styled-components'

import Form from '../components/form'

const Signin = styled.div`
  width: 40rem;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.6);
`

Signin.Form = Form

Signin.Header = styled.div`
  background: url(${require('../images/logo-royal.svg')}) center 30%;
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
    background: var(--red);
    color: var(--dark);
    position: absolute;
    top: 50%;
    padding: 0.7rem;
    transform: translateY(-50%);
    border-radius: 3px;
  }
  &:last-child {
    margin: 0;
  }
`

Signin.Input = styled.input``

Signin.Submit = styled.input``

export default Signin
