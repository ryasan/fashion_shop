import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from './error-boundary.styles'

const ErrorBoundaryComponent = ({ error, children }) => {
  if (error?.networkError?.result?.errors?.length) {
    return (
      <ErrorBoundary>
        {error.networkError.result.errors.map((error, i) => (
          <ErrorBoundary.Text key={i}>
            <ErrorBoundary.Addon modifiers="redColor">
              !&nbsp;
            </ErrorBoundary.Addon>
            {error.message}
          </ErrorBoundary.Text>
        ))}
      </ErrorBoundary>
    )
  }

  if (error?.message) {
    return (
      <ErrorBoundary>
        <ErrorBoundary.Text>
          <ErrorBoundary.Addon modifiers="redColor">
            !&nbsp;
          </ErrorBoundary.Addon>
          {error?.title}: {error.message}
        </ErrorBoundary.Text>
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
