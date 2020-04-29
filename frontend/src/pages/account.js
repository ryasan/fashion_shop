import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Account, { Details } from '../styles/account-page.styles'
import ErrorBoundary from '../components/error-boundary'
import PleaseSignin from '../components/please-sign-in/please-sign-in.styles'
import Loader from '../components/loader/loader.styles'
import { useCurrentUserQuery, useDeleteMeMutation } from '../graphql/user/hooks'
import { redButton, transparentButton, P, Button } from '../components/elements'
import { withHoverState } from '../utils'

const AccountDetails = ({ me, mouseHoverProps, isHovering }) => {
  const [deleteMe, { data, loading, error }] = useDeleteMeMutation()
  const handleDelete = e => {
    e.preventDefault()
    const ok = confirm(`Delete account for ${me.username}?`)
    if (ok) deleteMe()
  }

  useEffect(() => {
    if (data) toast(data.deleteMe.message)
  }, [data])

  if (loading) {
    return <Loader color="white" />
  }

  if (me) {
    return (
      <Details>
        <ErrorBoundary error={error}>
          <P modifiers="white_color">email: {me.email}</P>
          <P modifiers="white_color">username: {me.username}</P>
          <Button
            {...mouseHoverProps}
            onClick={handleDelete}
            modifiers={isHovering ? transparentButton : redButton}>
            Delete Account
          </Button>
          {/* order history */}
        </ErrorBoundary>
      </Details>
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
        <PleaseSignin>
          <ErrorBoundary error={error}>
            {loading || !me ? (
              <Loader color="white" />
            ) : (
              <AccountDetailsWithHoverState me={me} />
            )}
          </ErrorBoundary>
        </PleaseSignin>
      </Account>
    </Layout>
  )
}

export default AccountPage
