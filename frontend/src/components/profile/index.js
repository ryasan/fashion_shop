import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import SEO from '../../components/seo'
import ErrorBoundary from '../../components/error-boundary'
import Loader from '../../components/loader'
import Profile from './profile.styles'
import {
  useDeleteMeMutation,
  useCurrentUserQuery
} from '../../graphql/user/hooks'
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

  return (
    <Profile>
      <SEO title={`Profile | ${me?.username || 'Loading...'}`} /> {/* eslint-disable-line */}
      {userLoading || delLoading ? (
        <Loader color='white' />
      ) : (
        <ErrorBoundary error={userError || delError}>
          <Profile.Text modifiers='white_color'>email: {me.email}</Profile.Text>
          <Profile.Text modifiers='white_color'>username: {me.username}</Profile.Text>
          <Profile.DelBtn onClick={handleDelete}>Delete Account</Profile.DelBtn>
        </ErrorBoundary>
      )}
    </Profile>
  )
}

ProfileComponent.propTypes = {
  me: PropTypes.object
}

export default ProfileComponent
