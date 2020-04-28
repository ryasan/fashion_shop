import { buildStyledComponent } from '../../utils'

export const Button = buildStyledComponent({
  element: 'button',
  constantStyles: ['border: none', 'cursor: pointer']
})

export const redButton = [
  'red',
  'whiteColor',
  'redBorder',
  'border2px',
  'solidBorder',
  'mediumText',
  'redOutline'
]

export const disabledRedButton = [
  'lightRed',
  'whiteColor',
  'salmonBorder',
  'border2px',
  'solidBorder',
  'mediumText',
  'redOutline'
]

export const clearButton = [
  'transparent',
  'redColor',
  'redBorder',
  'border2px',
  'solidBorder',
  'mediumText',
  'redOutline'
]
