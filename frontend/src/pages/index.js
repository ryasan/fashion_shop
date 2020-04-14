import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/carousel/index'
import Home from '../styles/home-page.styles'

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home>
        <Carousel />
        <Home.Content>
          <Home.SectionOne>
            <Home.H1>Lorem Ipsum Dolor</Home.H1>
            <Home.TextList>
              <Home.TextItem>
                <Home.Span>NEW FOR 2020</Home.Span>
                <Home.H2>Lorem Ipsum</Home.H2>
                <Home.P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, necessitatibus cupiditate repellat doloremque hic
                  itaque vero dolorem fugiat ex accusamus, nesciunt facere modi?
                  Totam velit quam asperiores voluptates voluptatum amet.
                </Home.P>
              </Home.TextItem>
              <Home.TextItem>
                <Home.Span>ANNOUNCING...</Home.Span>
                <Home.H2>Lorem Ipsum</Home.H2>
                <Home.P>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  facilis impedit repudiandae accusamus esse unde eos, eum,
                  harum consequuntur cum dignissimos voluptatum fugiat
                  asperiores autem dicta.
                </Home.P>
              </Home.TextItem>
              <Home.TextItem>
                <Home.Span>ANNOUNCING...</Home.Span>
                <Home.H2>Lorem Ipsum</Home.H2>
                <Home.P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, necessitatibus cupiditate repellat doloremque hic
                  itaque vero dolorem fugiat ex accusamus, nesciunt facere modi?
                  Totam velit quam asperiores voluptates voluptatum amet.
                </Home.P>
              </Home.TextItem>
            </Home.TextList>
          </Home.SectionOne>
          <Home.SectionTwo>
            <Home.MaxWidth>
              <Home.H1>Lorem Ipsum Dolor</Home.H1>
              <Home.Icons>
                <Home.IconWrap>
                  <Home.Icon name="magnifier" />
                  <Home.P>Lorem ipsum dolor sit amet</Home.P>
                </Home.IconWrap>
                <Home.IconWrap>
                  <Home.Icon name="shopping-bag" />
                  <Home.P>Lorem ipsum dolor sit amet</Home.P>
                </Home.IconWrap>
                <Home.IconWrap>
                  <Home.Icon name="envelope" />
                  <Home.P>Lorem ipsum dolor sit amet</Home.P>
                </Home.IconWrap>
              </Home.Icons>
              <Home.P>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Home.P>
            </Home.MaxWidth>
          </Home.SectionTwo>
        </Home.Content>
      </Home>
    </Layout>
  )
}

export default HomePage
