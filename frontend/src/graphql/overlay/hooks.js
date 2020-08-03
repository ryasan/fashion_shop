import { useMutation, useQuery } from '@apollo/react-hooks'

import { TOGGLE_OVERLAY_MUTATION } from './mutations'
import { OVERLAY_QUERY } from './queries'

export const useToggleOverlayMutation = () => {
  return useMutation(TOGGLE_OVERLAY_MUTATION)
}

export const useOverlayQuery = () => {
  return useQuery(OVERLAY_QUERY)
}
