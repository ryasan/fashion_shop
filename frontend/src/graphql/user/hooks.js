import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  SIGNUP_MUTATION,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  DELETE_ME,
  REQUEST_PASSWORD_RESET_MUTATION,
  RESET_PASSWORD_MUTATION,
  UPDATE_PERMISSIONS_MUTATION
} from './mutations'
import { CURRENT_USER_QUERY, USERS_QUERY } from './queries'

export const useCurrentUserQuery = () => {
  return useQuery(CURRENT_USER_QUERY)
}

export const useUsersQuery = () => {
  return useQuery(USERS_QUERY)
}

export const useDeleteMeMutation = () => {
  return useMutation(DELETE_ME, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useSignoutMutation = () => {
  return useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useSigninMutation = () => {
  return useMutation(SIGNIN_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useSignupMutation = () => {
  return useMutation(SIGNUP_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useRequestPasswordResetMutation = () => {
  return useMutation(REQUEST_PASSWORD_RESET_MUTATION)
}

export const useResetPasswordMutation = () => {
  return useMutation(RESET_PASSWORD_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}

export const useUpdatePermissionsMutation = () => {
  return useMutation(UPDATE_PERMISSIONS_MUTATION)
}
