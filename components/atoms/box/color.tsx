import styled from 'styled-components'
import { Box } from './common'

export const ColorBox = styled(Box)<{
  background?: string
  opacity?: number
  hover?: { background?: string; opacity?: number }
}>`
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : '')}
    ${(props) =>
    props.opacity === 0
      ? `
        opacity: 0;
        pointer-events: none;
    `
      : ''}
    

    ${(props) =>
    props.hover
      ? `
        &:hover {
            cursor: pointer;
            transition: 0.3s;
            ${
              props.hover.background
                ? `background: ${props.hover.background};`
                : ''
            }
            ${props.hover.opacity ? `opacity: ${props.hover.opacity};` : ''}
        }
    `
      : ``}
`
