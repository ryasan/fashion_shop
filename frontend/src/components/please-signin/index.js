import React from 'react'
import PropTypes from 'prop-types'

import Signin from '../signin'

const PleaseSigninComponent = ({ children, me }) => {
  return me ? (
    children
  ) : (
    <div>
      <p>Please sign in before continuing</p>
      <Signin />
    </div>
  )
}

PleaseSigninComponent.propTypes = {
  children: PropTypes.object.isRequired,
  me: PropTypes.object
}

export default PleaseSigninComponent
