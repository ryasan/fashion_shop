import React from 'react'

import AccountLayout from '../../layouts/account-layout'
import Profile from '../../components/profile'
import Layout from '../../layouts/global-layout'

const AccountPage = () => (
    <Layout>
        <AccountLayout>
            <Profile />
        </AccountLayout>
    </Layout>
)

export default AccountPage
