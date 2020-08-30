import styled, { css } from 'styled-components'
import { buildStyledComponent } from './config/build-styled-component'

export const Hr = buildStyledComponent({
    element: styled.hr,
    baseStyles: css`
        border: 0;
        height: 1px;
    `
})
