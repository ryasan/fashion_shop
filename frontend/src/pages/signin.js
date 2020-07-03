import React from 'react'

import SEO from '../components/seo'
import Signin from '../components/signin'

const SigninPage = ({ className }) => {
  return (
    <>
      <SEO title="Signin" />
      <Signin />
    </>
  )
}

export default SigninPage
