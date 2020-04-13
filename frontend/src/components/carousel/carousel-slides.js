const slides = [
  {
    title: 'Lorem Ipsum 1',
    image: require('../../images/logo-royal-banner.svg'),
    bg: 'squares',
    element: {
      tag: 'input',
      text: 'Search for an item',
      icon: 'magnifier'
    }
  },
  {
    title: 'Lorem Ipsum 2',
    image: require('../../images/logo-jersey-banner.svg'),
    bg: 'circle',
    element: {
      tag: 'button',
      text: 'SHOP',
      to: 'shop'
    }
  },
  {
    title: 'Lorem Ipsum 3',
    image: require('../../images/logo-diamond-banner.svg'),
    triangle: '',
    element: {
      tag: 'input',
      text: 'Subscribe to our weekly newsletter',
      icon: 'envelope'
    }
  }
]

export default slides
