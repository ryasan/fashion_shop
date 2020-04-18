import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Signin from '../styles/signin-page.styles'
import { Input } from '../components/elements'
import Icon from '../components/icons'

const SigninPage = ({ className }) => {
  return (
    <Layout>
      <SEO title="Signin" />
      <Signin>
        <Signin.Header />
        <Signin.Form>
          <Signin.Fieldset>
            <Signin.Field>
              <Icon name="cart" />
              <Input placeholder="email" type="text" />
            </Signin.Field>
            <Signin.Field>
              <Icon name="cart" />
              <Input placeholder="password" type="password" />
            </Signin.Field>
            <Signin.Field>
              <Signin.Submit type="submit" />
            </Signin.Field>
          </Signin.Fieldset>
        </Signin.Form>
      </Signin>
    </Layout>
  )
}

export default SigninPage
