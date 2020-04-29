import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from './error-boundary.styles'
import { P, Span } from '../../elements'

const ErrorBoundaryComponent = ({ error, children }) => {
  if (error?.networkError?.result?.errors?.length) {
    return (
      <ErrorBoundary>
        {error.networkError.result.errors.map((error, i) => (
          <P key={i}>
            <Span modifiers="red_color">
              !&nbsp;
            </Span>
            {error.message}
          </P>
        ))}
      </ErrorBoundary>
    )
  }

  if (error?.message) {
    return (
      <ErrorBoundary>
        <P>
          <Span modifiers="red_color">
            !&nbsp;
          </Span>
          {error?.title}: {error.message}
        </P>
      </ErrorBoundary>
    )
  }

  return children
}

ErrorBoundaryComponent.defaultProps = {
  error: {}
}

ErrorBoundaryComponent.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node
}

export default ErrorBoundaryComponent
