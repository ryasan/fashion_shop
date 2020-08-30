import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import Icon from '../../icons'
import { H1, H4, P, Ul, Li } from '../../../shared/elements'
import { device } from '../../../shared/utils'

const OurServices = styled.div`
    align-items: center;
    background: var(--off-white);
    color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70vh;
    padding: 5rem;
    position: relative;
`

OurServices.Title = styled(motion.h1)`
    margin: 0;
    text-align: center;
`

OurServices.HugeText = styled(H1)`
    font-size: 25rem;
    font-weight: 300;
    position: absolute;
    right: -24rem;
    top: -37rem;

    @media ${device.mobileL} {
        display: none;
    }
`

export const Grid = styled(motion.ul)`
    display: grid;
    grid-column-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    max-width: var(--max-width);
    text-align: center;
    width: 100%;

    @media ${device.mobileL} {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`

export const Item = styled(motion.li)`
    border-radius: 2rem;
    box-shadow: var(--box-shadow-m);
    height: 23rem;
    margin-top: 15rem;
    position: relative;
    width: 30rem;

    &:first-child {
        background: var(--red);
        color: white;
        grid-column: 1/2;
    }

    &:nth-child(2) {
        background: white;
        color: var(--red);
        grid-column: 2/3;
    }

    &:last-child {
        background: var(--dark);
        color: white;
        grid-column: 3/4;
    }
`

const iconColor = (color: string) => {
    switch (color) {
        case 'white':
            return css`
                color: white;
            `
        case 'black':
            return css`
                color: var(--dark);
            `
        case 'red':
            return css`
                color: var(--red);
            `
    }
}

const iconBackground = (color: string) => {
    switch (color) {
        case 'white':
            return css`
                background: var(--dark);
            `
        case 'black':
            return css`
                background: var(--red);
            `
        case 'red':
            return css`
                background: white;
            `
    }
}

Item.Icon = styled(Icon)`
    border-radius: 1.5rem;
    box-shadow: var(--box-shadow-s);
    height: 8rem;
    left: 50%;
    padding: 2rem;
    position: absolute;
    top: -30%;
    transform: translateX(-50%);
    width: 8rem;
    z-index: 0;

    ${(props: { color: string }) => iconColor(props.color)}
    ${(props: { color: string }) => iconBackground(props.color)}
`

Item.Title = styled(H4)`
    margin-bottom: 0;
    margin-top: 4rem;
`

Item.TextContainer = styled.div`
    height: 100%;
    padding: 0 2rem;
    position: absolute;
    width: 100%;
    z-index: 1;
`

Item.Text = styled(P)`
    margin: 2rem 0;
`

Item.List = styled(Ul)`
    margin-top: 2rem;
    padding: 0 2rem;
    text-align: left;
`

Item.ListItem = styled(Li)`
    font-size: var(--font-size-lg);
    list-style-type: disc;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

export default OurServices
