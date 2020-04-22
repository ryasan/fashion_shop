import styled from 'styled-components'

import ErrorBoundary from '../components/error-boundary'
import Loader from '../components/loader/loader.styles'
import PleaseSignin from '../components/please-sign-in/index'
import { P, Button } from '../components/elements'

const Account = styled.div``

Account.Details = styled.div`
  button {
    padding: 1rem 2rem;
    border-radius: 2px;
    outline-color: var(--red);
  }
`

Account.Text = P
Account.DelMeBtn = Button

Account.ErrorBoundary = ErrorBoundary
Account.Loader = Loader
Account.PleaseSignin = PleaseSignin

export default Account
