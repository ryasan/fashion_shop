import { redButton, transparentButton } from '../../elements'

const carouselSlides = [
  {
    title: 'Lorem Ipsum 1',
    image: require('../../images/logo-royal-banner.svg'),
    element: {
      tag: 'button',
      text: 'SIGN IN',
      to: '/signin/',
      icon: 'account-circle',
      modifiers: [redButton, transparentButton]
    }
  },
  {
    title: 'Lorem Ipsum 2',
    image: require('../../images/logo-jersey-banner.svg'),
    element: {
      tag: 'button',
      text: 'SHOP',
      to: '/shop/',
      icon: 'shopping-bag',
      modifiers: [redButton, transparentButton]
    }
  },
  {
    title: 'Lorem Ipsum 3',
    image: require('../../images/logo-diamond-banner.svg')
  }
]

export default carouselSlides
