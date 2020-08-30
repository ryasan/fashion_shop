import styled from 'styled-components'

import { Button, P } from '../../shared/elements'
import { btns } from '../../shared/styles'

const PleaseSignin = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: space-around;
`

PleaseSignin.Text = P

PleaseSignin.Btn = styled(Button)`
    padding: 1rem 2rem;
    ${btns.red}
`

export default PleaseSignin
