import React from 'react'

import SEO from '../components/seo'
import Signin from '../components/signin'
import Layout from '../layouts/global-layout'

const SigninPage = ({ className }) => {
  return (
    <Layout>
      <SEO title="Signin" />
      <Signin />
    </Layout>
  )
}

export default SigninPage
