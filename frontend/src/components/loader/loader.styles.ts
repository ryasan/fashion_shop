import styled, { keyframes } from 'styled-components'

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`

const Loader = styled.div`
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: ${(props: any) => props.size?.loader as string};
    justify-content: center;
    left: 50%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(props: any) => props.size?.loader as string};

    &::before,
    &::after {
        border: ${(props: any) => props.size?.border as string} solid
            transparent;
        border-bottom-color: ${(props: any) => props.primary as string};
        border-radius: 100%;
        border-top-color: ${(props: any) => props.primary as string};
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
    }

    &::before {
        animation: ${spin} 1s infinite;
        z-index: 100;
    }

    &::after {
        border: ${(props: any) => props.size?.border as string} solid
            ${(props: any) => props.secondary as string};
    }

    > div {
        background: ${(props: any) => props.primary as string};
    }
`

Loader.Dot = styled.div`
    border-radius: 50%;
    height: ${(props: any) => props.size?.dot};
    width: ${(props: any) => props.size?.dot};
`

export default Loader
