import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

import OurServices, { Grid } from './our-services.styles'

// prettier-ignore
const services = [
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: 'white'
  },
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: 'black'
  },
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    color: 'red'
  }
]

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
              <Grid.Item key={i} variants={childrenVariants()}>
                <Grid.ItemIcon name='shopping-bag' color={service.color} />
                <Grid.ItemTextContainer>
                  <Grid.ItemTitle>{service.title}</Grid.ItemTitle>
                  <Grid.ItemText>{service.description}</Grid.ItemText>
                </Grid.ItemTextContainer>
              </Grid.Item>
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
