import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PleaseSignin from '../components/please-sign-in/index'
import Account from '../styles/account-page.styles'

const AccountPage = () => {
  return (
    <Layout>
      <SEO title="My Account" />
      <PleaseSignin>
        <Account>
          <h1 style={{ color: 'white' }}>Account Page</h1>
        </Account>
      </PleaseSignin>
    </Layout>
  )
}

export default AccountPage
