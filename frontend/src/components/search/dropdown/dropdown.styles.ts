import styled from 'styled-components'

import { motion } from 'framer-motion'
import { Span } from '../../../shared/elements'

const Dropdown = styled(motion.div)`
    position: absolute;
    top: calc(100%);
    width: 90%;
`

export const SearchResults = styled.ul`
    background: var(--dark);
    border-left: 0.2rem solid var(--red);
    border-radius: 0.3rem;
    max-height: 48.5rem;
    overflow-y: scroll;
    text-align: center;
    width: 100%;
`

SearchResults.Item = styled.li`
    border: 0.2rem solid var(--red);
    border-left: ${(props: { highlighted: boolean }) =>
            props.highlighted ? '1rem' : 0}
        solid var(--darker);
    cursor: pointer;
    display: flex;
    height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.2s;
    white-space: nowrap;

    &:first-child {
        border-radius: 0.3rem 0.3rem 0 0;
    }

    &:not(:first-child) {
        border-top: 0;
    }
`

SearchResults.ItemTitle = styled(Span)`
    background: ${(props: any) =>
        (props.highlighted as boolean) ? 'var(--darker)' : 'var(--dark)'};
    display: inline-block;
    flex: 1;
    line-height: 7rem;
    margin: 0;
    padding: 0 1rem;
    text-align: left;
`

SearchResults.ItemImage = styled.img`
    height: 7rem;
    object-fit: cover;
    padding: 0.2rem 0;
    width: 7rem;
`

export const ScrollBtn = styled(motion.div)`
    background: var(--dark);
    border: 0.2rem solid var(--red);
    border-radius: 0 0 0.3rem 0.3rem;
    display: flex;
    flex-direction: column;
    height: 7rem;
    justify-content: flex-end;
    width: calc(100% - 0.5rem);
`

ScrollBtn.Text = styled(motion.div)`
    align-items: flex-end;
    display: flex;
    flex: 1;
    justify-content: center;
    vertical-align: text-bottom;
    width: 100%;

    &:last-child {
        align-items: flex-start;
        font-size: 3rem;
    }
`

export default Dropdown
