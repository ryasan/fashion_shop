import React from 'react'

import ErrorBoundary from './error-boundary.styles'

const ErrorBoundaryComponent: any = ({
    error,
    children
}: {
    children: React.ReactChild
    error: any
}) => {
    if (error?.networkError?.result?.errors?.length) {
        return (
            <ErrorBoundary>
                {error.networkError.result.errors.map(
                    (error: { message: string }, i: number) => (
                        <ErrorBoundary.Text key={i}>
                            <ErrorBoundary.Text.Addon modifiers='red_color'>
                                !&nbsp;
                            </ErrorBoundary.Text.Addon>
                            {error.message}
                        </ErrorBoundary.Text>
                    )
                )}
            </ErrorBoundary>
        )
    }

    if (error?.message) {
        return (
            <ErrorBoundary>
                <ErrorBoundary.Text>
                    <ErrorBoundary.Text.Addon modifiers='red_color'>
                        !&nbsp;
                    </ErrorBoundary.Text.Addon>
                    {error?.title}: {error.message}
                </ErrorBoundary.Text>
            </ErrorBoundary>
        )
    }

    return children
}

export default ErrorBoundaryComponent
