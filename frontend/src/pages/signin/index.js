import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import qs from 'query-string'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import Layout from '../../layouts/global-layout'
import { SIGNUP, SIGNIN, REQUEST_RESET } from '../../components/signin/form-types'
import {
  EMAIL,
  USERNAME,
  PASSWORD,
  CONFIRM
} from '../../components/signin/action-types'

const SigninComponent = () => {
  const [authType, setAuthType] = useState(SIGNIN)
  const location = useLocation()
  const { resetToken } = qs.parse(location.search)

  if (resetToken) {
    return (
      <Signin
        chosenFields={[PASSWORD, CONFIRM]}
        setAuthType={setAuthType}
        authType={authType}
        resetToken={resetToken}
      />
    )
  }

  if (authType) {
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
}

const SigninPage = props => {
  return (
    <Layout>
      <SEO title="Signin" />
      <SigninComponent {...props} />
    </Layout>
  )
}

export default SigninPage
