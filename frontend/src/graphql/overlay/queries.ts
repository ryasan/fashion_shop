import gql from 'graphql-tag'

export const OVERLAY_QUERY = gql`
    query {
        overlayIsOpen @client
    }
`
