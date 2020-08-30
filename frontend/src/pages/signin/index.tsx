import React from 'react'

import SEO from '../../components/seo'
import Signin from '../../components/signin'
import Layout from '../../layouts/global-layout'
import { EMAIL, PASSWORD } from '../../types/auth-field-types'

const SigninPage: React.StatelessComponent = props => (
    <Layout>
        <SEO title='Signin' />
        <Signin {...props} chosenFields={[EMAIL, PASSWORD]} isSignin />
    </Layout>
)

export default SigninPage
