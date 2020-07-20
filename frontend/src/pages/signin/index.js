import React from 'react'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import Layout from '../../layouts/global-layout'
import { EMAIL, PASSWORD } from '../../components/signin/action-types'
import { SIGNIN } from '../../components/signin/form-types'

const SigninPage = props => {
  return (
    <Layout>
      <SEO title="Signin" />
      <Signin {...props} chosenFields={[EMAIL, PASSWORD]} isSignin={SIGNIN} />
    </Layout>
  )
}

export default SigninPage
