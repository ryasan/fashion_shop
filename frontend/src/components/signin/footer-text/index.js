import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import FooterText from './footer-text.styles'

const FooterTextComponent = ({
  isSignin,
  isSignup,
  isRequestReset,
  isPasswordReset
}) => {
  const footerContents = [
    isSignin && {
      text: 'Forgot your password?',
      to: '/signin/request-reset/',
      link: 'Reset'
    },
    isSignin && {
      text: 'Need to sign up for an account?',
      to: '/signup/',
      link: 'Signup'
    },
    isSignup && {
      text: 'Already have an account? Back to signin.',
      to: '/signin/',
      link: 'Signin'
    },
    (isRequestReset || isPasswordReset) && {
      text: 'Go Back to signin.',
      to: '/signin/',
      link: 'Signin'
    }
  ].filter(Boolean)

  return footerContents.map((c, i) => (
    <FooterText key={i}>
      {c.text}{' '}
      <Link to={c.to} style={{ color: 'var(--red)' }}>
        {c.link}
      </Link>
    </FooterText>
  ))
}

FooterText.propTypes = {
  isSignin: PropTypes.bool,
  isSignup: PropTypes.bool,
  isRequestReset: PropTypes.bool,
  isPasswordReset: PropTypes.bool
}

export default FooterTextComponent
