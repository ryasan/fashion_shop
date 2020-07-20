import React from 'react'
import Layout from '../../layouts/global-layout'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import { EMAIL } from '../../components/signin/action-types'
import { REQUEST_RESET } from '../../components/signin/form-types'

const RequestResetPage = props => {
  return (
    <Layout>
      <SEO title="Request Password Reset" />
      <Signin {...props} chosenFields={[EMAIL]} isRequestReset={REQUEST_RESET} />
    </Layout>
  )
}

export default RequestResetPage
