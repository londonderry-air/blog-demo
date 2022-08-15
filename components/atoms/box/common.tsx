/* eslint-disable no-undef */
import styled from 'styled-components'

export const Box = styled.div<{
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  position?: NonNullable<JSX.IntrinsicElements['div']['style']>['position']
  margin?: string
  padding?: string
  shrink?: string
  grow?: string
  zIndex?: string
  overflow?: string
  overflowX?: string
  overflowY?: string
  radius?: string
  transition?: number
  pointerEvents?: string
}>`
  ${(props) => (props.position ? `position: ${props.position};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height === '100vh' ? `height: 100dvh;` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.zIndex ? `z-index: ${props.zIndex};` : '')}
  ${(props) => (props.minWidth ? `min-width: ${props.minWidth};` : '')}
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight};` : '')}
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : '')}
  ${(props) => (props.shrink ? `flex-shrink: ${props.shrink};` : '')}
  ${(props) => (props.grow ? `flex-grow: ${props.grow};` : '')}
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : '')}
  ${(props) => (props.overflowX ? `overflow-x: ${props.overflowX};` : '')}
  ${(props) => (props.overflowY ? `overflow-y: ${props.overflowY};` : '')}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : '')}
  ${(props) => (props.transition ? `transition: ${props.transition}s;` : '')}
  ${(props) =>
    props.pointerEvents ? `pointer-events: ${props.pointerEvents};` : ''}
`
