import { useMutation } from '@apollo/react-hooks'

import { CREATE_ORDER_MUTATION } from './mutations'
import { CURRENT_USER_QUERY } from '../user/queries'

export const useCreateOrderMutation = () => {
  return useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  })
}
