import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--dark);
`

Layout.Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

export default Layout
