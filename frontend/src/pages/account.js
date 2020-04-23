import React, { useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Account from '../styles/account-page.styles'

import { useCurrentUserQuery, useDeleteMeMutation } from '../graphql/user/hooks'
import { redButton, clearButton } from '../components/elements'
import { withHoverState } from '../utils'

const AccountDetails = ({ me, mouseHoverProps, isHovering }) => {
  const [deleteMe, { data, loading, error }] = useDeleteMeMutation()

  const handleDelete = e => {
    e.preventDefault()
    const ok = confirm(`Delete account for ${me.username}?`)
    if (ok) {
      deleteMe()
    }
  }

  useEffect(() => {
    console.log('delete data', data)
  }, [data])

  if (loading) {
    return <Account.Loader color="white" />
  }

  if (me) {
    return (
      <Account.Details>
        <Account.Text modifiers="whiteColor">email: {me.email}</Account.Text>
        <Account.Text modifiers="whiteColor">
          username: {me.username}
        </Account.Text>
        <Account.DeleteMeBtn
          {...mouseHoverProps}
          onClick={handleDelete}
          modifiers={isHovering ? clearButton : redButton}>
          Delete Account
        </Account.DeleteMeBtn>
        {/* order history */}
      </Account.Details>
    )
  }
  return null
}

const AccountDetailsWithHoverState = withHoverState(AccountDetails)

const AccountPage = props => {
  const { data, loading, error } = useCurrentUserQuery()
  const me = data && data.me

  return (
    <Layout>
      <SEO title="My Account" />
      <Account>
        <Account.PleaseSignin>
          <Account.ErrorBoundary error={error}>
            {loading || !me ? (
              <Account.Loader color="white" />
            ) : (
              <AccountDetailsWithHoverState me={me} />
            )}
          </Account.ErrorBoundary>
        </Account.PleaseSignin>
      </Account>
    </Layout>
  )
}

export default AccountPage
