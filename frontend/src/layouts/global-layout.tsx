import React from 'react'

import Layout from './global-layout.styles'
import Header from '../components/header'
import Footer from '../components/footer'
import Toast from '../components/toast'
import Overlay from '../components/overlay'

const LayoutComponent: React.StatelessComponent = ({ children }) => (
    <Layout>
        <Toast />
        <Header />
        <Layout.Main>
            <Overlay />
            {children}
        </Layout.Main>
        <Footer />
    </Layout>
)

export default LayoutComponent
