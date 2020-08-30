import styled from 'styled-components'
import { motion } from 'framer-motion'

import {
    H2,
    Ul,
    Li,
    A,
    Input,
    Textarea,
    Button
} from '../../../shared/elements'
import { btns } from '../../../shared/styles/buttons'
import { device } from '../../../shared/utils'

const Footer = styled.div`
    align-items: flex-start;
    background: var(--red);
    box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.25),
        0 -0.5rem 1rem rgba(0, 0, 0, 0.22);
    display: flex;
    height: 35rem;
    justify-content: flex-start;
    padding: 5rem;
    position: relative;

    @media ${device.mobileL} {
        flex-direction: column;
        height: auto;
        margin-bottom: 7rem;
    }
`

export const Links = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media ${device.mobileL} {
        width: 100%;
    }
`

Links.Title = styled(H2)`
    color: var(--dark);
    font-style: italic;
    font-weight: 400;
    letter-spacing: 1rem;
    margin-top: 0;
`

Links.List = styled(Ul)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        margin-bottom: 7rem;
    }
`

Links.ListItem = styled(Li)`
    font-size: 3rem;
    letter-spacing: 1rem;
    margin: 1rem 0;
`

Links.Link = styled(A)`
    cursor: pointer;
`

export const Subscribe = styled.div`
    display: grid;
    flex: 1;
    grid-column-gap: 2rem;

    *::placeholder {
        color: var(--off-white);
    }

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
    }
`

Subscribe.Title = styled(H2)`
    grid-column: 1/3;
    margin-top: 0;
`

Subscribe.TextInput = styled(Input)`
    background: 0;
    border: 0;
    border-bottom: 0.3rem solid white;
    border-radius: 0.2rem;
    color: white;
    margin-bottom: 4rem;
    padding: 1rem;

    &:first-child {
        grid-column: 1/2;
    }

    &:last-child {
        grid-column: 2/3;
    }

    &:disabled {
        border-bottom-color: var(--light-gray);
        color: var(--light-gray);
    }
`

Subscribe.Textarea = styled(Textarea)`
    background: 0;
    border: 0;
    border-bottom: 0.3rem solid white;
    border-radius: 0.2rem;
    color: white;
    margin-bottom: 4rem;
    padding: 1rem;

    &:disabled {
        border-bottom-color: var(--light-gray);
        color: var(--light-gray);
    }
`

Subscribe.SubmitBtn = styled(Button)`
    ${btns.clearWhite}
    height: 4rem;
    width: 17rem;

    &:hover {
        ${btns.white}
        color: var(--red);
    }

    &:disabled {
        background: var(--light-gray);
        border-color: var(--light-gray);
        color: white;
    }
`

export const SocialMedia = styled(motion.div)`
    bottom: 2rem;
    position: absolute;
    right: 3rem;
    z-index: 1;

    @media ${device.mobileL} {
        bottom: 0;
        left: 50%;
        margin-top: 2rem;
        position: relative;
        transform: translateX(-50%);
    }
`

SocialMedia.MotionIcon = styled(motion.div)`
    color: white;
    display: inline-block;

    svg {
        cursor: pointer;
        height: 4rem;
        margin-left: 2rem;
        width: 4rem;
    }
`

export default Footer
