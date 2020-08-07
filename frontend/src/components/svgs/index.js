import React from 'react'

import DiagonalBlockSvg from './diagonal-block'
import SkullTextSvg from './skull-text'
import NinjaTextSvg from './ninja-text'

const SVG = props => {
  switch (props.name) {
    case 'diagonal-block':
      return <DiagonalBlockSvg {...props} />
    case 'skull-text':
      return <SkullTextSvg {...props} />
    case 'ninja-text':
      return <NinjaTextSvg {...props} />
  }
}

export default SVG
