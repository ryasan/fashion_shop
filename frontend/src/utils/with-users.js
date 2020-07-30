import React, { useState, useEffect } from 'react'

import Loader from '../components/loader'
import ErrorBoundary from '../components/error-boundary'
import { useUsersQuery } from '../graphql/user/hooks'

export const withUsers = Component => props => {
  const [users, setUsers] = useState([])
  const [usersMap, setUsersMap] = useState({})
  const { data, loading, error } = useUsersQuery()

  useEffect(() => {
    if (data) {
      const map = data.users.reduce((map, user) => {
        map[user.id] = { ...user }
        return map
      }, {})
      setUsersMap(map)
      setUsers(data.users)
    }
  }, [data])

  return loading ? (
    <Loader color='white' size='medium' />
  ) : (
    <ErrorBoundary error={error}>
      {users.length && (
        <Component
          {...props}
          users={users}
          setUsers={setUsers}
          usersMap={usersMap}
          setUsersMap={setUsersMap}
        />
      )}
    </ErrorBoundary>
  )
}
