import { TOGGLE_OVERLAY } from './action-types'
import { OVERLAY_QUERY } from './queries'

export const overlayInitialState = {
    overlayIsOpen: false
}

const overlayReducer = (
    actionType: string,
    client: any,
    variables: { bool: boolean }
) => {
    const state = client.readQuery({ query: OVERLAY_QUERY })

    switch (actionType) {
        case TOGGLE_OVERLAY:
            return client.writeData({ data: { overlayIsOpen: variables.bool } })
        default:
            return state
    }
}

export default overlayReducer
