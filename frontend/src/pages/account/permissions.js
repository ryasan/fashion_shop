import React from 'react'

import Layout from '../../layouts/global-layout'
import AccountLayout from '../../layouts/account-layout'
import SEO from '../../components/seo'
import PermissionsComponent from '../../components/permissions'

const PermissionsPage = () => {
  return (
    <Layout>
      <AccountLayout>
        <SEO title='Permissions' />
        <PermissionsComponent />
      </AccountLayout>
    </Layout>
  )
}

export default PermissionsPage
