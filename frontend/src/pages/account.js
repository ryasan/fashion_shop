import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Account from '../styles/account-page.styles'

import { useCurrentUserQuery } from '../graphql/user/hooks'
import { redButton, clearButton } from '../components/shared'
import { withHoverHOC } from '../utils'

const AccountDetails = props => {
  const handleDelete = e => {
    e.preventDefault()
    const okToDelete = confirm('Are you sure you want to delete your account?')
    console.log(okToDelete)
  }

  if (props.me) {
    return (
      <Account.Details>
        <Account.Text modifiers="whiteColor">
          email: {props.me.email}
        </Account.Text>
        <Account.Text modifiers="whiteColor">
          username: {props.me.username}
        </Account.Text>
        <Account.DelMeBtn
          {...props.handleHover()}
          onClick={handleDelete}
          modifiers={props.isHovering ? clearButton : redButton}>
          Delete Account
        </Account.DelMeBtn>
        {/* order history */}
      </Account.Details>
    )
  }
  return null
}

const AccountDetailsWithHoverHOC = withHoverHOC(AccountDetails)

const AccountPage = props => {
  const { data, loading, error } = useCurrentUserQuery()
  const me = data && data.me

  return (
    <Layout>
      <SEO title="My Account" />
      <Account.PleaseSignin>
        <Account.ErrorBoundary error={error}>
          <Account>
            {loading ? (
              <Account.Loader color="white" />
            ) : (
              <AccountDetailsWithHoverHOC me={me} />
            )}
          </Account>
        </Account.ErrorBoundary>
      </Account.PleaseSignin>
    </Layout>
  )
}

export default AccountPage
