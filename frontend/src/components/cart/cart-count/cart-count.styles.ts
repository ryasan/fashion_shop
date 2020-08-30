import styled from 'styled-components'

const CartCount = styled.div`
    background: var(--red);
    border-radius: 50%;
    color: white;
    font-feature-settings: 'tnum';
    font-size: 1.5rem;
    font-variant-numeric: tabular-nums;
    font-weight: 100;
    left: -20%;
    line-height: 1rem;
    margin-left: 1rem;
    min-width: 2rem;
    padding: 0.5rem;
    text-align: center;
`

CartCount.AnimationStyles = styled.span`
    position: absolute;
    right: 0;

    .count {
        backface-visibility: hidden;
        display: block;
        position: relative;
        transition: all 0.5s;
    }

    .count-enter {
        transform: rotateX(0.5turn);
    }

    .count-enter-active {
        background: red;
        transform: rotateX(0);
    }

    .count-exit {
        background: red;
        position: absolute;
        top: 0;
        transform: rotateX(0);
    }

    .count-exit-active {
        background: red;
        transform: rotateX(0.5turn);
    }
`

export default CartCount
