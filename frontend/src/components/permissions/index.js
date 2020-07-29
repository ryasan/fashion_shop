import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Permissions, { Table, _Cell, HeaderCell } from './permissions.styles'
import Loader from '../loader'
import ErrorBoundary from '../error-boundary'
import Icon from '../icons'
import {
  useUsersQuery,
  useUpdatePermissionsMutation
} from '../../graphql/user/hooks'
import { Input as Checkbox, Button } from '../../elements'
import { capitalCase } from 'change-case'
import { toast } from '../toast'
import {
  ADMIN,
  USER,
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_DELETE,
  PERMISSION_UPDATE
} from '../../types/permission-types'

const possiblePermissions = [
  ADMIN,
  USER,
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_DELETE,
  PERMISSION_UPDATE
]

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

const Cell = withExtraProps(_Cell)

const UserPermissions = ({ user, setActiveIdx }) => {
  const [permissions, setPermissions] = useState(user.permissions)
  const [updateUser, { data, error }] = useUpdatePermissionsMutation()

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

  const handleUpdateUser = () => {
    updateUser({ variables: { permissions, userId: user.id } })
  }

  useEffect(() => {
    if (data) toast('Update successful.')
  }, [data])

  if (error) {
    return null
  }

  return (
    <Table.Row>
      <Cell>{user.username}</Cell>
      <Cell>{user.email}</Cell>
      {possiblePermissions.map((p, idx) => (
        <Cell key={idx} data-index={idx} setActiveIdx={setActiveIdx}>
          <Checkbox
            type='checkbox'
            value={p}
            checked={permissions.includes(p)}
            onChange={handlePermissionChange}
          />
        </Cell>
      ))}
      <Cell>
        <Button onClick={handleUpdateUser}>Update</Button>
      </Cell>
    </Table.Row>
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

const PermissionsComponent = () => {
  const { data, loading, error } = useUsersQuery()
  const [activeIdx, setActiveIdx] = useState(null)

  return (
    <Permissions>
      <ErrorBoundary error={error}>
        {loading ? (
          <Loader color='white' size='medium' />
        ) : (
          <Table>
            <Table.Head>
              <Table.Row>
                <HeaderCell>Username</HeaderCell>
                <HeaderCell>Email</HeaderCell>
                {possiblePermissions.map((permission, i) => (
                  <HeaderCell key={i} active={activeIdx === i}>
                    {capitalCase(permission)}
                  </HeaderCell>
                ))}
                <HeaderCell>
                  <Icon name='key' />
                </HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {data.users.map(user => (
                <UserPermissions
                  key={user.id}
                  user={user}
                  activeIdx={activeIdx}
                  setActiveIdx={setActiveIdx}
                />
              ))}
            </Table.Body>
          </Table>
        )}
      </ErrorBoundary>
    </Permissions>
  )
}

export default PermissionsComponent
