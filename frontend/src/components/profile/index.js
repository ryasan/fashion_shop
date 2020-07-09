import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import SEO from '../../components/seo'
import ErrorBoundary from '../../components/error-boundary'
import Loader from '../../components/loader/loader.styles'
import Profile from './profile.styles'
import { useDeleteMeMutation, useCurrentUserQuery } from '../../graphql/user/hooks'
import { P, Button } from '../../elements'
import { toast } from '../../components/toast'

const ProfileComponent = () => {
  const { data: userData, loading: userLoading, error: userError } = useCurrentUserQuery()
  const [deleteMe, { data: delData, loading: delLoading, error: delError }] = useDeleteMeMutation()
  const me = userData?.me

  const handleDelete = e => {
    e.preventDefault()
    const ok = confirm(`Delete account for ${me.username}?`)
    if (ok) deleteMe()
  }

  useEffect(() => {
    if (delData) toast(delData.deleteMe.message)
  }, [delData])

  if (userLoading || delLoading) {
    return <Loader color="white" />
  }

  return (
    <Profile>
      <SEO title={`Profile | ${me.username}`} />
      <ErrorBoundary error={userError || delError}>
        <P modifiers="white_color">email: {me.email}</P>
        <P modifiers="white_color">username: {me.username}</P>
        <Button onClick={handleDelete}>Delete Account</Button>
      </ErrorBoundary>
    </Profile>
  )
}

ProfileComponent.propTypes = {
  me: PropTypes.object
}

export default ProfileComponent
