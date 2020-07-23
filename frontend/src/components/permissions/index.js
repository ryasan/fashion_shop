import React from 'react'

import Users, { Table } from './permissions.styles'
import Loader from '../loader'
import ErrorBoundary from '../error-boundary/index'
import { useUsersQuery } from '../../graphql/user/hooks'
import {
  Td as Cell,
  Th as HeaderCell,
  Input as Checkbox,
  Button
} from '../../elements'
import { capitalCase } from 'change-case'
import Icon from '../icons'

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEM_CREATE',
  'ITEM_UPDATE',
  'ITEM_DELETE',
  'PERMISSION_UPDATE'
]

const UserPermissions = ({ user }) => {
  return (
    <Table.Row>
      <Cell>{user.username}</Cell>
      <Cell>{user.email}</Cell>
      {possiblePermissions.map(p => (
        <Cell key={p}>
          <Checkbox type="checkbox" checked={user.permissions.includes(p)} />
        </Cell>
      ))}
      <Cell>
        <Button>Update</Button>
      </Cell>
    </Table.Row>
  )
}

const PermissionsComponent = () => {
  const { data, loading, error } = useUsersQuery()

  return (
    <Users>
      <ErrorBoundary error={error}>
        {loading ? (
          <Loader color="white" size="medium" />
        ) : (
          <Table>
            <Table.Head>
              <Table.Row>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Email</HeaderCell>
                {possiblePermissions.map((permission, i) => (
                  <HeaderCell key={i}>{capitalCase(permission)}</HeaderCell>
                ))}
                <HeaderCell>
                  <Icon name="key" />
                </HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {data.users.map(user => (
                <UserPermissions key={user.id} user={user} />
              ))}
            </Table.Body>
          </Table>
        )}
      </ErrorBoundary>
    </Users>
  )
}

export default PermissionsComponent
