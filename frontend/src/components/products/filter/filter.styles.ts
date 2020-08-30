import styled from 'styled-components'

import { Button } from '../../../shared/elements'
import { device } from '../../../shared/utils'
import redTexture from '../../../static/red-texture.png'

const Filter = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    min-height: 7rem;
    position: relative;
    z-index: 9999;

    @media ${device.laptop} {
        left: 1rem;
        position: fixed;
    }

    @media ${device.mobileL} {
        flex-direction: column;
    }
`

Filter.ResetBtn = styled(Button)`
    align-items: center;
    background: url(${redTexture}) 5%;
    color: white;
    cursor: pointer;
    display: flex;
    height: 5rem;
    justify-content: center;
    margin-left: 2rem;
    outline: none;
    position: relative;
    width: 10rem;
    z-index: -1;

    &:hover {
        &::before {
            color: var(--super-light-gray);
        }
    }

    &::before {
        align-items: center;
        background: var(--dark);
        border-radius: 0.2rem;
        color: white;
        content: 'Reset filters';
        display: flex;
        height: 81%;
        justify-content: center;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 91%;
        z-index: -1;
    }

    @media ${device.mobileL} {
        margin-left: 0;
        margin-top: 1rem;
    }
`

export default Filter
