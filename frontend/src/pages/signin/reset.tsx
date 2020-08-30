import React from 'react'
import Layout from '../../layouts/global-layout'
import { parse } from 'query-string'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import { PASSWORD, CONFIRM } from '../../types/auth-field-types'

const PasswordResetPage: React.StatelessComponent = (props: any) => {
    const { resetToken } = parse(location.search)

    return (
        <Layout>
            <SEO title='Signup' />
            <Signin
                {...props}
                chosenFields={[PASSWORD, CONFIRM]}
                resetToken={resetToken}
                isPasswordReset
            />
        </Layout>
    )
}

export default PasswordResetPage
