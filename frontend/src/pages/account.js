import React, { useEffect } from 'react'

import SEO from '../components/seo'
import Account, { Details } from '../styles/account-page.styles'
import ErrorBoundary from '../components/error-boundary'
import PleaseSignin from '../components/please-sign-in'
import Loader from '../components/loader/loader.styles'
import { useCurrentUserQuery, useDeleteMeMutation } from '../graphql/user/hooks'
import { P, Button } from '../elements'
import { toast } from '../components/toast'

const AccountDetails = ({ me }) => {
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
          <Button onClick={handleDelete}>
            Delete Account
          </Button>
          {/* order history */}
        </ErrorBoundary>
      </Details>
    )
  }
  return null
}

const AccountPage = props => {
  const { data, loading, error } = useCurrentUserQuery()
  const me = data && data.me

  return (
    <>
      <SEO title="My Account" />
      <Account>
        <PleaseSignin>
          <ErrorBoundary error={error}>
            {loading || !me ? (
              <Loader color="white" />
            ) : (
              <AccountDetails me={me} />
            )}
          </ErrorBoundary>
        </PleaseSignin>
      </Account>
    </>
  )
}

export default AccountPage
