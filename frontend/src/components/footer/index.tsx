import React from 'react'

import Footer from './footer.styles'

const FooterComponent: React.StatelessComponent = () => (
  <Footer>Built with Gatsby © {new Date().getFullYear()}</Footer>
)

export default FooterComponent
