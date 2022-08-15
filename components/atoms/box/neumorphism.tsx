import styled from 'styled-components'
import { Box } from './common'

export const NeumorphismBox = styled(Box)<{
  background: string
  boxShadow: string
}>`
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
`
