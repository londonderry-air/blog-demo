import styled from 'styled-components'
import { Box } from './common'

export const ScaleBox = styled(Box)<{ scale: number }>`
  cursor: pointer;
  &:hover {
    transform: scale(${(props) => props.scale});
  }
`
