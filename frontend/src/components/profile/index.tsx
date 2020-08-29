import React, { useEffect } from 'react'

import SEO from '../seo'
import ErrorBoundary from '../error-boundary'
import Loader from '../loader'
import Profile from './profile.styles'
import { toast } from '../toast'
import {
  useDeleteMeMutation,
  useCurrentUserQuery
} from '../../graphql/user/hooks'

const ProfileComponent = () => {
  const { data: userData, loading: userLoading, error: userError } = useCurrentUserQuery()
  const [deleteMe, { data: delData, loading: delLoading, error: delError }] = useDeleteMeMutation()
  const me = userData?.me

  const handleDelete = (e: React.FormEvent) => {
  e.preventDefault()
  if (me) {
    const ok = confirm(`Delete account for ${me.username}?`)
    if (ok) deleteMe()
  }
  }


  useEffect(() => {
    if (delData) toast(delData.deleteMe.message)
  }, [delData])

  return (
    <Profile>
      <SEO title={`Profile | ${me?.username || 'Loading...'}`} />
      {userLoading || delLoading ? (
        <Loader color='white' />
      ) : (
        me && (
          <ErrorBoundary error={userError || delError}>
            <Profile.Text modifiers='white_color'>email: {me.email}</Profile.Text>
            <Profile.Text modifiers='white_color'>username: {me.username}</Profile.Text>
            <Profile.DelBtn onClick={handleDelete}>Delete Account</Profile.DelBtn>
          </ErrorBoundary>
        )
      )}
    </Profile>
  )
}

export default ProfileComponent
