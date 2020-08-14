import styled, { keyframes } from 'styled-components'

const Account = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 5rem;
`

Account.Inner = styled.div`
  max-width: var(--max-width);
  width: 100%;
`

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const fadeIn = keyframes`
  0% { border-bottom-color: white; }
  100% { border-bottom-color: transparent; }
`

Tabs.Links = styled.div`
  border-bottom: 1px solid white;

  a {
    background: var(--dark);
    border: 0.1rem solid white;
    border-left: 0;
    color: white;
    display: inline-block;
    font-size: var(--font-size-lg);
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    transform: translateY(1px);
    transition: border-bottom-color 0.3s;
    width: 15rem;

    &.active {
      animation: ${fadeIn} 0.3s;
      border-bottom-color: var(--dark);
    }

    &:first-child {
      border-left: 1px solid white;
    }
  }
`

Tabs.Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
`

export { Tabs }
export default Account
