import React from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary, { Text } from './error-boundary.styles'

const ErrorBoundaryComponent = ({ error, children }) => {
  if (error?.networkError?.result?.errors?.length) {
    return (
      <ErrorBoundary>
        {error.networkError.result.errors.map((error, i) => (
          <Text key={i}>
            <Text.Addon modifiers='red_color'>!&nbsp;</Text.Addon>
            {error.message}
          </Text>
        ))}
      </ErrorBoundary>
    )
  }

  if (error?.message) {
    return (
      <ErrorBoundary>
        <Text>
          <Text.Addon modifiers='red_color'>!&nbsp;</Text.Addon>
          {error?.title}: {error.message}
        </Text>
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
