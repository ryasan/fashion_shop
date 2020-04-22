import styled from 'styled-components'

import { P, Button } from '../elements'

const PleaseSignin = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  button {
    padding: 1rem 2rem;
    border-width: 2px;
    border-style: solid;
    border-radius: 2px;
    border: 2px solid var(--red);
  }
`

PleaseSignin.Btn = Button
PleaseSignin.Text = P

export default PleaseSignin
