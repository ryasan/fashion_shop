import styled from 'styled-components'

const Account = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`

Account.Inner = styled.div`
  max-width: var(--max-width);
  width: 100%;
`

const Tabs = styled.div``

Tabs.Links = styled.div`
  border-bottom: 1px solid white;
  a {
    font-size: var(--font-size-m);
    text-decoration: none;
    padding: 1rem;
    color: white;
    background: var(--dark);
    border: 1px solid white;
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

Tabs.Content = styled.div``

export { Tabs }
export default Account
