import gql from 'graphql-tag'

export const TOGGLE_OVERLAY_MUTATION = gql`
    mutation($bool: Boolean) {
        toggleOverlay(bool: $bool) @client
    }
`
