import styled from 'styled-components'

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

Tabs.Links = styled.div`
  border-bottom: 1px solid white;

  a {
    background: var(--dark);
    border: 0.1rem solid white;
    border-left: 0;
    color: white;
    display: inline-block;
    font-size: var(--font-size-m);
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    transform: translateY(1px);
    width: 11.7rem;

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
