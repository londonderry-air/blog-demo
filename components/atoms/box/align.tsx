import styled from 'styled-components'
import { Box } from './common'

export const AlignBox = styled(Box)<{
  align: 'left' | 'center' | 'right'
}>`
  ${(props) =>
    props.align === 'left' || props.align === 'center'
      ? 'margin-right: auto;'
      : ''}
  ${(props) =>
    props.align === 'right' || props.align === 'center'
      ? 'margin-left: auto;'
      : ''}
  ${(props) =>
    props.align === 'right' &&
    (props.position === 'absolute' || props.position === 'fixed')
      ? 'right: 0;'
      : ''}
  ${(props) =>
    props.align === 'left' &&
    (props.position === 'absolute' || props.position === 'fixed')
      ? 'left: 0;'
      : ''}
  ${(props) =>
    props.align === 'center' &&
    (props.position === 'absolute' || props.position === 'fixed')
      ? `
    transform: translate(50%, 50%);
    right: -50%;
    left: -50%;
  `
      : ''}
`
