import React from 'react'
import { Link } from 'gatsby'

import Account, { Tabs } from './account-layout.styles'
import ErrorBoundary from '../components/error-boundary'
import PleaseSignin from '../components/please-sign-in'
import Loader from '../components/loader/loader.styles'
import { useCurrentUserQuery } from '../graphql/user/hooks'
import { hasPermission } from '../shared/utils'
import { ADMIN, ITEM_CREATE } from '../types/permission-types'

const AccountLayout = ({ children }) => {
  const { data, loading, error } = useCurrentUserQuery()
  const me = data?.me

  const isActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: 'active' } : {}
  }

  return (
    <Account>
      <Account.Inner>
        <PleaseSignin>
          <ErrorBoundary error={error}>
            {loading || !me ? (
              <Loader color='white' />
            ) : (
              <Tabs>
                <Tabs.Links>
                  <Link to='/account/' activeClassName='active'>
                    Profile
                  </Link>
                  <Link
                    to='/account/orders/'
                    state={{ me }}
                    activeClassName='active'
                    getProps={isActive}
                  >
                    Orders
                  </Link>
                  <Link to='/account/permissions' activeClassName='active'>
                    Permissions
                  </Link>
                  {hasPermission(me, [ADMIN, ITEM_CREATE]) && (
                    <Link to='/account/product-create' activeClassName='active'>
                      Create Product
                    </Link>
                  )}
                </Tabs.Links>
                <Tabs.Content>{children}</Tabs.Content>
              </Tabs>
            )}
          </ErrorBoundary>
        </PleaseSignin>
      </Account.Inner>
    </Account>
  )
}

export default AccountLayout
