import React, { useEffect } from 'react'

import Layout from '../layouts/global-layout'
import SEO from '../components/seo'
import Icon from '../components/icons'
import Home, { Foreground, BgImage, Links } from '../styles/home-page.styles'
import { Link, scrollSpy } from 'react-scroll'
import { H1 } from '../elements'

const PageLinks = () => {
  return (
    <Links>
      <Link
        to="top"
        activeClass="active"
        className="scroll-link one"
        smooth
        spy>
        1
      </Link>
      <Link
        to="section-2"
        activeClass="active"
        className="scroll-link two"
        smooth
        spy>
        2
      </Link>
    </Links>
  )
}

const HomePage = () => {
  useEffect(() => {
    scrollSpy.update()
  }, [])

  return (
    <Layout id="top">
      <Home>
        <SEO title="Home" />
        <Foreground>
          <Foreground.Img src={require('../images/foreground-img.svg')} />
        </Foreground>
        <Home.Section id="section-1" />
        {/* <Home.Section id="section-fill" /> */}
        <Home.Section id="section-2" />
        <Home.Text1>
          <div className="app__text-line app__text-line--1">
            <Icon name="logo-royal" />
          </div>
          <H1 className="app__text-line app__text-line--4">Lorem Ipsum</H1>
          <div className="app__text-line app__text-line--3">Shop</div>
        </Home.Text1>
        <PageLinks />
      </Home>
    </Layout>
  )
}

export default HomePage
