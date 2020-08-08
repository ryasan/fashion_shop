import React from 'react'

import CartIcon from './cart'
import LeftArrowIcon from './left-arrow'
import RightArrowIcon from './right-arrow'
import MagnifierIcon from './magnifier'
import EnvelopeIcon from './envelope'
import LogoRoyalIcon from './logo-royal'
import LogoJerseyIcon from './logo-jersey'
import LogoDiamondIcon from './logo-diamond'
import ShoppingBagIcon from './shopping-bag'
import CloseIcon from './close'
import AccountIcon from './account'
import KeyIcon from './key'
import TwitterIcon from './twitter'
import InstagramIcon from './instagram'
import FacebookIcon from './facebook'
import HomeIcon from './home'
import StoreIcon from './store'
import ExitIcon from './exit'
import DocumentIcon from './document'
import TitleIcon from './title'
import MoneyIcon from './money'
import FingerprintIcon from './fingerprint'
import FilterIcon from './filter'
import PersonAddIcon from './person-add'

const Icon = props => {
  switch (props.name) {
    case 'account-circle':
    case 'account-box':
      return <AccountIcon {...props} />
    case 'cart':
      return <CartIcon {...props} />
    case 'envelope':
      return <EnvelopeIcon {...props} />
    case 'exit':
      return <ExitIcon {...props} />
    case 'close':
      return <CloseIcon {...props} />
    case 'facebook-filled':
    case 'facebook-outlined':
      return <FacebookIcon {...props} />
    case 'filter':
      return <FilterIcon {...props} />
    case 'fingerprint':
      return <FingerprintIcon {...props} />
    case 'home':
      return <HomeIcon {...props} />
    case 'instagram-filled':
    case 'instagram-outlined':
      return <InstagramIcon {...props} />
    case 'key-filled':
    case 'key-outlined':
      return <KeyIcon {...props} />
    case 'left-arrow':
      return <LeftArrowIcon {...props} />
    case 'logo-diamond':
      return <LogoDiamondIcon {...props} />
    case 'logo-jersey':
      return <LogoJerseyIcon {...props} />
    case 'logo-royal':
      return <LogoRoyalIcon {...props} />
    case 'magnifier':
      return <MagnifierIcon {...props} />
    case 'money':
      return <MoneyIcon {...props} />
    case 'person-add':
      return <PersonAddIcon {...props} />
    case 'right-arrow':
      return <RightArrowIcon {...props} />
    case 'shopping-bag':
      return <ShoppingBagIcon {...props} />
    case 'store':
      return <StoreIcon {...props} />
    case 'title':
      return <TitleIcon {...props} />
    case 'twitter-filled':
    case 'twitter-outlined':
      return <TwitterIcon {...props} />
    case 'document':
    default:
      return <DocumentIcon {...props} />
  }
}

export default Icon
