import React from 'react'

import SEO from '../components/seo'
import Signin from '../components/signin'
import Layout from '../layouts/global-layout'

import {
  EMAIL,
  PASSWORD,
  USERNAME,
  CONFIRM
} from '../components/signin/action-types'
import { SIGNUP } from '../components/signin/form-types'

const SignupPage = props => {
  return (
    <Layout>
      <SEO title="Signup" />
      <Signin
        {...props}
        chosenFields={[EMAIL, USERNAME, PASSWORD, CONFIRM]}
        isSignup={SIGNUP}
      />
    </Layout>
  )
}

export default SignupPage
