import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/carousel/index'
import Home from '../styles/home-page.styles'

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Home>
      <Carousel />
      <Home.Content>
        <Home.SectionOne>
          <Home.TurntablesBg />
          <Home.SectionOneContent>
            <Home.SectionTitle modifiers={['redColor', 'textAlignCenter']}>
              Lorem Ipsum Dolor
            </Home.SectionTitle>
            <Home.TextList>
              <Home.TextItem>
                <Home.Span>NEW FOR 2020</Home.Span>
                <Home.TextTitle modifiers={['redColor']}>
                  Lorem Ipsum
                </Home.TextTitle>
                <Home.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, necessitatibus cupiditate repellat doloremque hic
                  itaque vero dolorem fugiat ex accusamus, nesciunt facere modi?
                  Totam velit quam asperiores voluptates voluptatum amet.
                </Home.Description>
              </Home.TextItem>
              <Home.TextItem>
                <Home.Span>ANNOUNCING...</Home.Span>
                <Home.TextTitle modifiers={['redColor']}>
                  Lorem Ipsum
                </Home.TextTitle>
                <Home.Description>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  facilis impedit repudiandae accusamus esse unde eos, eum,
                  harum consequuntur cum dignissimos voluptatum fugiat
                  asperiores autem dicta.
                </Home.Description>
              </Home.TextItem>
              <Home.TextItem>
                <Home.Span>ANNOUNCING...</Home.Span>
                <Home.TextTitle modifiers={['redColor']}>
                  Lorem Ipsum
                </Home.TextTitle>
                <Home.Description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, necessitatibus cupiditate repellat doloremque hic
                  itaque vero dolorem fugiat ex accusamus, nesciunt facere modi?
                  Totam velit quam asperiores voluptates voluptatum amet.
                </Home.Description>
              </Home.TextItem>
            </Home.TextList>
          </Home.SectionOneContent>
        </Home.SectionOne>
        <Home.SectionTwo>
          <Home.MaxWidth>
            <Home.SectionTitle modifiers={['redColor', 'textAlignCenter']}>
              Lorem Ipsum Dolor
            </Home.SectionTitle>
            <Home.Icons>
              <Home.IconWrap>
                <Home.Icon name="magnifier" />
                <Home.Description>Lorem ipsum dolor sit amet</Home.Description>
              </Home.IconWrap>
              <Home.IconWrap>
                <Home.Icon name="shopping-bag" />
                <Home.Description>Lorem ipsum dolor sit amet</Home.Description>
              </Home.IconWrap>
              <Home.IconWrap>
                <Home.Icon name="envelope" />
                <Home.Description>Lorem ipsum dolor sit amet</Home.Description>
              </Home.IconWrap>
            </Home.Icons>
            <Home.Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Home.Description>
          </Home.MaxWidth>
        </Home.SectionTwo>
      </Home.Content>
    </Home>
  </Layout>
)

export default HomePage
