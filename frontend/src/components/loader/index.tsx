import React from 'react'

import Loader from './loader.styles'

const setColors = (color: string | undefined) => {
    switch (color) {
        case 'dark':
            return { primary: 'var(--dark)', secondary: 'white' }
        case 'white':
        default:
            return { primary: 'white', secondary: 'var(--dark)' }
    }
}

const setSize = (size: string) => {
    switch (size) {
        case 'small':
            return { loader: '5rem', dot: '0.5rem', border: '0.5rem' }
        case 'medium':
        default:
            return { loader: '10rem', dot: '1rem', border: '1rem' }
    }
}

const LoaderComponent = ({
    className,
    color,
    size = 'medium'
}: {
    className?: string
    color?: string
    size?: string
}) => {
    const colors = setColors(color)
    const _size = setSize(size)
    const classNames = className ? `loader ${className}` : 'loader'

    return (
        <Loader {...colors} size={_size} className={classNames}>
            <Loader.Dot size={_size} />
        </Loader>
    )
}

export default LoaderComponent
