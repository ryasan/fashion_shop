import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

import OurServices, { Grid, Item } from './our-services.styles'

// prettier-ignore
const services = [
  {
    title: 'Simple satisfaction',
    description: [
      {
        paragraph: `
        Your happiness is important to us. If for any reason you are not pleased with your purchase,
        just contact us within 30 days and we will give you a refund or replacement`
      }
    ],
    color: 'white',
    icon: 'smiley-face'
  },
  {
    title: 'How do I place an order?',
    description: [
      {
        paragraph: `
        Select an item you like then click "purchase". If applicable, select a size then proceed to add your cart.
        Continue shopping until you are ready to complete your purchase.`
      }
    ],
    color: 'black',
    icon: 'shopping-bag'
  },
  {
    title: 'Payment methods',
    description: [
      {
        list: [
          'VISA', 'MASTERCARD', 'AMERICAN EXPRESS', 'PAYPAL'
        ]
      }
    ],
    color: 'red',
    icon: 'dollar'
  }
]

const renderText = content => {
  return content.map((c, index) => {
    if (c.paragraph) {
      return <Item.Text key={index}>{c.paragraph}</Item.Text>
    } else if (c.list) {
      return (
        <Item.List key={index}>
          {c.list.map((text, idx) => (
            <Item.ListItem key={idx}>{text}</Item.ListItem>
          ))}
        </Item.List>
      )
    }
  })
}

const parentVariants = () => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    }
  }
})

const childrenVariants = () => ({
  hidden: { opacity: 0 },
  show: { opacity: 1 }
})

const OurServicesComponent = ({ scrollPct }) => {
  return (
    <OurServices>
      <OurServices.HugeText>IDEA</OurServices.HugeText>
      <OurServices.Title>Our Services</OurServices.Title>
      <AnimatePresence>
        {scrollPct >= 85 && (
          <Grid
            variants={parentVariants()}
            initial='hidden'
            animate={scrollPct >= 85 ? 'show' : 'hidden'}
          >
            {services.map((service, i) => (
              <Item key={i} variants={childrenVariants()}>
                <Item.Icon name={service.icon} color={service.color} />
                <Item.TextContainer>
                  <Item.Title>{service.title}</Item.Title>
                  {renderText(service.description)}
                </Item.TextContainer>
              </Item>
            ))}
          </Grid>
        )}
      </AnimatePresence>
    </OurServices>
  )
}

OurServicesComponent.propTypes = {
  scrollPct: PropTypes.number.isRequired
}

export default OurServicesComponent
