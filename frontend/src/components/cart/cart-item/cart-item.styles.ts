import styled, { css } from 'styled-components'

import { Image, Span, Button } from '../../../shared/elements'
import Icon from '../../icons'

const CartItem = styled.li`
    border-top: 2px solid #101010;
    height: 12rem;
    position: relative;
    width: 100%;

    ${(props: { isMouseOver: boolean }) =>
        props.isMouseOver &&
        css`
            background: var(--darker);

            span {
                text-decoration: line-through;
            }
        `}
`

CartItem.Content = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
`

CartItem.Image = styled(Image)`
    height: 100%;
`

export const Details = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: var(--font-size-lg);
    justify-content: space-between;
    margin: 0 2rem;
`

Details.Text = Span

export const Price = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

Price.CloseBtn = styled(Icon)`
    cursor: pointer;
    fill: white;
    height: 1.5rem;
    width: 1.5rem;

    &:hover {
        fill: var(--red);
    }
`

Price.Text = styled(Span)`
    font-size: var(--font-size-lg);
`

Price.BtnGroup = styled.div`
    display: flex;
`

Price.Btn = styled(Button)`
    align-items: center;
    background: var(--darker);
    border-radius: 0;
    color: white;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    margin-left: 2px;
    width: 2rem;

    &:disabled {
        background: var(--dark);
    }

    &:focus {
        outline-color: transparent;
    }
`

export default CartItem
