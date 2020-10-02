import styled from 'styled-components'

import { P, Span } from '../../shared/elements'

const ErrorBoundary = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`

ErrorBoundary.Text = styled(P)`
    background: white;
    border-left: 0.3rem solid red;
    color: red;
    display: inline-block;
    padding: 1rem 2rem;
`

ErrorBoundary.Text.Addon = Span

export default ErrorBoundary
