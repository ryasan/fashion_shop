import React from 'react'

import Timer from './timer.styles'

const SlideTimerComponent: React.StatelessComponent<{ pct: number }> = ({
    pct
}) => (
    <Timer>
        <Timer.Bg />
        <Timer.Clock pct={pct} />
    </Timer>
)

export default SlideTimerComponent
