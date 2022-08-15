/* eslint-disable no-undef */
import styled from 'styled-components'
import { Box } from './common'

export const BorderBox = styled(Box)<{
  borderPosition: 'top' | 'bottom' | 'right' | 'left' | 'all'
  borderWidth: string
  borderColor: string
  borderStyle: NonNullable<JSX.IntrinsicElements['div']['style']>['borderStyle']
}>`
  ${(props) =>
    props.borderPosition === 'bottom'
      ? `border-bottom: ${props.borderStyle} ${props.borderWidth}
      ${props.borderColor};`
      : ''}
  ${(props) =>
    props.borderPosition === 'top'
      ? `border-top: ${props.borderStyle} ${props.borderWidth}
          ${props.borderColor};`
      : ''}
    ${(props) =>
    props.borderPosition === 'right'
      ? `border-right: ${props.borderStyle} ${props.borderWidth}
          ${props.borderColor};`
      : ''}
    ${(props) =>
    props.borderPosition === 'left'
      ? `border-left ${props.borderStyle} ${props.borderWidth}
          ${props.borderColor};`
      : ''}
    ${(props) =>
    props.borderPosition === 'all'
      ? `border: ${props.borderStyle} ${props.borderWidth}
          ${props.borderColor};`
      : ''}
`
export const HoverBorderBox = styled(Box)<{
  hover: {
    width?: string
  }
  unhover: {
    width?: string
  }
  color: string
}>`
  position: relative;
  padding: ${(props) => props.padding ?? '0.75em'};
  cursor: pointer;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    transition: 0.2s;
    top: 0;
    left: 0;
    width: ${(props) => props.unhover.width ?? '0.25em'};
    height: 100%;
    background: ${(props) => props.color};
    z-index: -1;
  }

  &:hover {
    &:before {
      width: ${(props) => props.hover.width ?? '0.5em'};
    }
  }
`

export const OverBorderBox = styled(Box)<{
  isActive: boolean
  borderColor: string
}>`
  height: fit-content;
  position: relative;
  &:before {
    content: '';
    transition: var(--transition);
    position: absolute;
    width: ${(props) => (props.isActive ? '100%' : '6px')};
    height: 100%;
    top: 0;
    background-color: ${(props) => props.borderColor};
    z-index: -1;
  }
`
