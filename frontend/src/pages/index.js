import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/carousel/index'
import Home, { TextList, Icons, MaxWidth } from '../styles/home-page.styles'
import { H1, Span, P, H2 } from '../components/elements'
import Icon from '../components/icons'

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Home>
      <Carousel />
      <Home.Content>
        <Home.SectionOne>
          <Home.TurntablesBg />
          <Home.SectionOneContent>
            <H1 modifiers={['red_color', 'text_align_center']}>
              Lorem Ipsum Dolor
            </H1>
            <TextList>
              <TextList.TextItem>
                <Span modifiers={['font_size_m', 'red_color']}>NEW FOR 2020</Span>
                <H2 modifiers={['red_color']}>Lorem Ipsum</H2>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, necessitatibus cupiditate repellat doloremque hic
                  itaque vero dolorem fugiat ex accusamus, nesciunt facere modi?
                  Totam velit quam asperiores voluptates voluptatum amet.
                </P>
              </TextList.TextItem>
              <TextList.TextItem>
                <Span modifiers={['font_size_m', 'red_color']}>
                  ANNOUNCING...
                </Span>
                <H2 modifiers={['red_color']}>Lorem Ipsum</H2>
                <P>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  facilis impedit repudiandae accusamus esse unde eos, eum,
                  harum consequuntur cum dignissimos voluptatum fugiat
                  asperiores autem dicta.
                </P>
              </TextList.TextItem>
              <TextList.TextItem>
                <Span modifiers={['font_size_m', 'red_color']}>
                  ANNOUNCING...
                </Span>
                <H2 modifiers={['red_color']}>Lorem Ipsum</H2>
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, necessitatibus cupiditate repellat doloremque hic
                  itaque vero dolorem fugiat ex accusamus, nesciunt facere modi?
                  Totam velit quam asperiores voluptates voluptatum amet.
                </P>
              </TextList.TextItem>
            </TextList>
          </Home.SectionOneContent>
        </Home.SectionOne>
        <Home.SectionTwo>
          <MaxWidth>
            <H1 modifiers={['red_color', 'text_align_center']}>
              Lorem Ipsum Dolor
            </H1>
            <Icons>
              <Icons.IconWrap>
                <Icon name="magnifier" />
                <P>Lorem ipsum dolor sit amet</P>
              </Icons.IconWrap>
              <Icons.IconWrap>
                <Icon name="shopping-bag" />
                <P>Lorem ipsum dolor sit amet</P>
              </Icons.IconWrap>
              <Icons.IconWrap>
                <Icon name="envelope" />
                <P>Lorem ipsum dolor sit amet</P>
              </Icons.IconWrap>
            </Icons>
            <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</P>
          </MaxWidth>
        </Home.SectionTwo>
      </Home.Content>
    </Home>
  </Layout>
)

export default HomePage
