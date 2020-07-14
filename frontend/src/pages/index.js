import React from 'react'

import SEO from '../components/seo'
import Home, { BgImage } from '../styles/home-page.styles'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Home>
      <div className="mouse"></div>
      <Home.App>
        <BgImage>
          <BgImage.Img1 className="app__bgimg-image app__bgimg-image--1"></BgImage.Img1>
          <BgImage.Img2 className="app__bgimg-image app__bgimg-image--2"></BgImage.Img2>
        </BgImage>
        <div className="app__img">
          <img
            // onmousedown="return false"
            src={require('../images/white-test-4.png')}
            alt="city"
          />
        </div>
      </Home.App>
      <div className="pages">
        <ul className="pages__list">
          <li
            data-target="1"
            className="pages__item pages__item--1 page__item-active"></li>
          <li data-target="2" className="pages__item pages__item--2"></li>
        </ul>
      </div>
    </Home>
  </>
)

export default HomePage
