import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Signin from '../components/signin'

const SigninPage = ({ className }) => {
  return (
    <Layout>
      <SEO title="Signin" />
      <Signin />
    </Layout>
  )
}

export default SigninPage
