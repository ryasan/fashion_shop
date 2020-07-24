import React from 'react'
import Layout from '../../layouts/global-layout'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import { EMAIL } from '../../components/signin/action-types'

const RequestResetPage = props => {
  return (
    <Layout>
      <SEO title="Request Password Reset" />
      <Signin
        {...props}
        chosenFields={[EMAIL]}
        isRequestReset
      />
    </Layout>
  )
}

export default RequestResetPage
