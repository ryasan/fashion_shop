import React from 'react'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import Layout from '../../layouts/global-layout'
import { EMAIL, PASSWORD } from '../../components/signin/action-types'

const SigninPage = props => {
  return (
    <Layout>
      <SEO title="Signin" />
      <Signin {...props} chosenFields={[EMAIL, PASSWORD]} isSignin />
    </Layout>
  )
}

export default SigninPage
