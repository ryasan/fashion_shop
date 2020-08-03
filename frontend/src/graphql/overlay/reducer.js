import { TOGGLE_OVERLAY } from './action-types'
import { OVERLAY_QUERY } from './queries'

export const overlayInitialState = {
  overlayIsOpen: false
}

const overlayReducer = (actionType, client, variables) => {
  const state = client.readQuery({ query: OVERLAY_QUERY })
  const { overlayIsOpen } = state

  switch (actionType) {
    case TOGGLE_OVERLAY:
      return client.writeData({ data: { overlayIsOpen: !overlayIsOpen } })
    default:
      return state
  }
}

export default overlayReducer
