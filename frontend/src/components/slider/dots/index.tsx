import React from 'react'

import DotList, { Dot } from './dots.styles'

const DotsComponent: React.StatelessComponent<{
    currentIdx: number
    dotCapacity: number
    onClick: (i: number) => void
}> = ({ currentIdx, dotCapacity, onClick }) => (
    <DotList>
        {Array.from({ length: dotCapacity }).map((_, i) => (
            <Dot
                key={i}
                isActive={i === currentIdx}
                onClick={() => onClick(i)}
            />
        ))}
    </DotList>
)

export default DotsComponent
