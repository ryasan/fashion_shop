import React, { useState } from 'react'

import SEO from '../components/seo'
import Signin from '../components/signin'
import Layout from '../layouts/global-layout'
import {
  SIGNUP,
  SIGNIN,
  RESET_PASSWORD,
  REQUEST_RESET
} from '../components/signin/form-types'
import {
  EMAIL,
  USERNAME,
  PASSWORD,
  CONFIRM
} from '../components/signin/action-types'

const SigninComponent = () => {
  const [authType, setAuthType] = useState(SIGNIN)

  switch (authType) {
    case SIGNUP:
      return (
        <Signin
          chosenFields={[EMAIL, USERNAME, PASSWORD, CONFIRM]}
          setAuthType={setAuthType}
          authType={authType}
        />
      )
    case REQUEST_RESET:
      return (
        <Signin
          chosenFields={[EMAIL]}
          setAuthType={setAuthType}
          authType={authType}
        />
      )
    case RESET_PASSWORD:
      return (
        <Signin
          chosenFields={[EMAIL, PASSWORD, CONFIRM]}
          setAuthType={setAuthType}
          authType={authType}
        />
      )
    case SIGNIN:
    default:
      return (
        <Signin
          chosenFields={[EMAIL, PASSWORD]}
          setAuthType={setAuthType}
          authType={authType}
        />
      )
  }
}

const SigninPage = ({ className }) => {
  return (
    <Layout>
      <SEO title="Signin" />
      <SigninComponent />
    </Layout>
  )
}

export default SigninPage
