import styled from 'styled-components'
import { Box } from './common'

export const CursorBox = styled(Box)<{ cursor: string }>`
  cursor: ${(props) => props.cursor};
`
