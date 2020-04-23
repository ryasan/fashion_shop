import styled from 'styled-components'

import ErrorBoundary from '../components/error-boundary'
import Loader from '../components/loader/loader.styles'
import PleaseSignin from '../components/please-sign-in/index'
import { P, Button } from '../components/elements'

const Account = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`

Account.Text = P
Account.DeleteMeBtn = Button
Account.ErrorBoundary = ErrorBoundary
Account.Loader = Loader
Account.PleaseSignin = PleaseSignin

Account.Details = styled.div`
  max-width: var(--max-width);
  width: 100%;
  button {
    padding: 1rem 2rem;
    border-radius: 2px;
    outline-color: var(--red);
  }
  p {
    margin-bottom: 2rem;
  }
`

export default Account
