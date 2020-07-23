import styled from 'styled-components'

const Account = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  flex-grow: 1;
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

Tabs.Links = styled.div`
  border-bottom: 1px solid white;
  a {
    width: 11.7rem;
    text-align: center;
    font-size: var(--font-size-m);
    text-decoration: none;
    padding: 1rem;
    color: white;
    background: var(--dark);
    border: 0.1rem solid white;
    border-left: none;
    display: inline-block;
    transform: translateY(1px);
    &.active {
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
