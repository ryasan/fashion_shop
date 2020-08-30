import styled from 'styled-components'

import { device } from '../../../shared/utils'

const ControlsHeader = styled.div`
    align-items: flex-start;
    background: transparent;
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    position: relative;
    width: 100%;

    > * {
        flex: 1;
        text-align: center;
    }

    @media (max-width: 1395px) {
        padding: 0 5rem;
    }

    @media ${device.laptop} {
        display: grid;
        grid-gap: 1.5rem;
        grid-template-rows: 1fr 1fr 1fr;
        justify-content: center;
        justify-items: center;
    }
`

export default ControlsHeader
