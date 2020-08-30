import styled from 'styled-components'

const Layout = styled.div`
    background: var(--dark);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

Layout.Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
`

export default Layout
