import styled, { css } from 'styled-components'

import Icon from '../icons'
import { Input } from '../../shared/elements'

interface FieldsInterface {
    [theme: string]: any
    container: any
    icon: any
    input: any
}

const fields: FieldsInterface = {
    container: {
        red: css`
            border-color: var(--red);
        `
    },
    icon: {
        dark: css`
            background: var(--dark);
        `,
        red: css`
            background: var(--red);
        `
    },
    input: {
        dark: css`
            border: 0;
        `,
        red: css`
            border-color: white;
        `
    }
}

const Field = styled.div`
    border-radius: 0.2rem;
    border-style: solid;
    border-width: 0.2rem;
    font-size: var(--font-size-lg);
    position: relative;
    transition: all 0.2s;
    ${({ theme }: { theme: string }) => fields.container[theme] || ''}
`

Field.Icon = styled(Icon)`
    height: 100%;
    padding: 0.5rem;
    position: absolute;
    width: 3.5rem;
    ${({ theme }: { theme: string }) => fields.icon[theme] || ''}
`

Field.Input = styled(Input)`
    border-radius: 0.2rem;
    border-style: solid;
    border-width: 0.2rem;
    height: 100%;
    padding: 1rem 1rem 1rem 4.5rem;
    width: 100%;
    ${({ theme }: { theme: string }) => fields.input[theme] || ''};

    &:disabled {
        background: var(--off-white);
    }
`

export default Field
