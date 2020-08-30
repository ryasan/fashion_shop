import styled from 'styled-components'
import { motion } from 'framer-motion'

import Icon from '../components/icons'
import { Div } from '../shared/elements'
import { device } from '../shared/utils'

const Home = styled.div`
    flex: 1;
    overflow-x: hidden;

    .scroll-btn {
        align-items: center;
        background: transparent;
        border: 0.2rem solid white;
        border-radius: 5rem;
        color: white;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-lg);
        justify-content: center;
        padding: 1rem 0.5rem;
    }
`

export const Body = Div

Body.Loader = styled.div`
    height: 100vh;
    position: relative;
`

export const ScrollBtn = styled(motion.div)`
    bottom: 3rem;
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    transition: transform 0.2s;
    z-index: 9999;

    @media ${device.mobileL} {
        bottom: 22rem;
        left: initial;
        right: 2rem;
    }

    &:hover {
        transform: scale(1.1) translateX(-50%);
    }
`

ScrollBtn.Text = styled.div`
    color: white;
    font-size: var(--font-size-m);
    margin: 0;
`

ScrollBtn.Icon = styled(Icon)`
    height: 2rem;
    width: 2rem;
`

export default Home
