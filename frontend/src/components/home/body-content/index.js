import React, { useState, useEffect } from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

import Body, { ProductPreview, Details } from './body-content.styles'
import { Span } from '../../../shared/elements'

export const BackgroundDiv = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hoodie-red-front.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag='div' className={className} fluid={imageData} />
      )
    }}
  />
)

const imageVariants = {
  hidden: { scale: 1 },
  show: {
    scale: 1.2,
    transition: {
      duration: 3
    }
  }
}

const parentVariants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } }
}

const childVariants = {
  hidden: { x: 150, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

const StyledBackgroundDiv = styled(BackgroundDiv)`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`

const BodyContentComponent = ({ pct }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (pct >= 50) setIsVisible(true)
  }, [pct])

  return (
    <Body>
      <Body.HugeText>STYLE</Body.HugeText>
      <Body.HugeText>Nimatic</Body.HugeText>
      <Body.Content>
        <ProductPreview>
          <ProductPreview.ImageContainer
            initial='hidden'
            variants={imageVariants}
            animate={isVisible ? 'show' : 'hidden'}
          >
            <ProductPreview.Title>
              <Span modifiers={['white_color', 'text_shadow_3']}>
                Ninja Hoodie
              </Span>
            </ProductPreview.Title>
            <StyledBackgroundDiv />
          </ProductPreview.ImageContainer>
          <Details>
            <Details.List
              variants={parentVariants}
              initial='hidden'
              animate={isVisible ? 'show' : 'hidden'}
            >
              {['Back in stock', 'Classic', '.Ninja Co'].map((text, i) => (
                <Details.ListItem key={i} variants={childVariants}>
                  {text}
                </Details.ListItem>
              ))}
            </Details.List>
          </Details>
        </ProductPreview>
      </Body.Content>
    </Body>
  )
}

export default BodyContentComponent
