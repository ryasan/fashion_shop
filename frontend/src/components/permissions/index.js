import React, { useState, useEffect } from 'react'
import { capitalCase } from 'change-case'
import PropTypes from 'prop-types'

import Permissions from './permissions.styles'
import Table from '../table'
import Icon from '../icons'
import possiblePermissions from '../../types/permission-types'
import ErrorBoundary from '../error-boundary'
import Loader from '../loader'
import {
  useUpdatePermissionsMutation,
  useUsersQuery
} from '../../graphql/user/hooks'
import { Button, Input } from '../../elements'
import { toast } from '../toast'
import { TableRow, HeaderCell, Cell } from '../table/table.styles'

const getProps = props => {
  const { setActiveIdx = () => ({}) } = props

  return {
    onMouseEnter: () => {
      setActiveIdx(props['data-index'])
    },
    onMouseLeave: () => {
      setActiveIdx(null)
    }
  }
}

const withExtraProps = Component => props => {
  return <Component {...props} {...getProps(props)} />
}

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const UserPermissionsTableHead = () => {
  const renderPossiblePermissions = () => {
    return possiblePermissions.map((permission, i) => (
      <HeaderCell key={i}>{capitalCase(permission)}</HeaderCell>
    ))
  }

  return (
    <TableRow>
      <HeaderCell>Username</HeaderCell>
      <HeaderCell>Email</HeaderCell>
      {renderPossiblePermissions()}
      <HeaderCell style={iconStyles}>
        <Icon name='key' />
      </HeaderCell>
    </TableRow>
  )
}

const UserPermissions = ({ user }) => {
  const [permissions, setPermissions] = useState(user.permissions)
  const [updateUser, { data, error }] = useUpdatePermissionsMutation()

  const handleUpdateUser = () => {
    updateUser({ variables: { permissions, userId: user.id } })
  }

  const handlePermissionChange = e => {
    const checkbox = e.target
    if (checkbox.checked) {
      setPermissions(_permissions => [..._permissions, checkbox.value])
    } else {
      setPermissions(_permissions =>
        _permissions.filter(p => p !== checkbox.value)
      )
    }
  }

  useEffect(() => {
    if (data && data.updatePermissions) toast('Update successful.')
  }, [data])

  return (
    <ErrorBoundary error={error}>
      {possiblePermissions.map((permission, i) => (
        <Cell key={i}>
          <Input
            type='checkbox'
            value={permission}
            onChange={handlePermissionChange}
            checked={permissions.includes(permission)}
          />
        </Cell>
      ))}
      <Cell>
        <Button onClick={handleUpdateUser}>Update</Button>
      </Cell>
    </ErrorBoundary>
  )
}

UserPermissions.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    permissions: PropTypes.array
  }).isRequired
}

const UserPermissionsTableBody = ({ users }) => {
  return users.map(user => (
    <TableRow key={user.id}>
      <Cell>{user.username}</Cell>
      <Cell>{user.email}</Cell>
      <UserPermissions user={user} />
    </TableRow>
  ))
}

const PermissionsComponent = () => {
  const { data, loading, error } = useUsersQuery()

  return loading ? (
    <Loader color='white' size='medium' />
  ) : (
    <ErrorBoundary error={error}>
      <Permissions>
        <Table
          head={<UserPermissionsTableHead />}
          body={<UserPermissionsTableBody users={data.users} />}
        />
      </Permissions>
    </ErrorBoundary>
  )
}

export default PermissionsComponent
