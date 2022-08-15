import styled from 'styled-components'
import { Box } from './common'

export const FlexBox = styled(Box)<{
  way: 'row' | 'column'
  wrap?: 'wrap' | 'nowrap'
  alignItems?: string
  justifyContent?: string
  gap?: string
}>`
  display: flex;
  flex-direction: ${(props) => props.way ?? 'row'};
  flex-wrap: ${(props) => props.wrap ?? 'nowrap'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  gap: ${(props) => (props.gap ? props.gap : '0')};
`
