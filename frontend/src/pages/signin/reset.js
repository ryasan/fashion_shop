import React from 'react'
import Layout from '../../layouts/global-layout'
import { parse } from 'query-string'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import { PASSWORD, CONFIRM } from '../../components/signin/action-types'
import { PASSWORD_RESET } from '../../components/signin/form-types'

const PasswordResetPage = props => {
  const { resetToken } = parse(location.search)

  return (
    <Layout>
      <SEO title="Signup" />
      <Signin
        {...props}
        chosenFields={[PASSWORD, CONFIRM]}
        resetToken={resetToken}
        isPasswordReset={PASSWORD_RESET}
      />
    </Layout>
  )
}

export default PasswordResetPage
