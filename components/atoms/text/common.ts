import styled from 'styled-components'

export type TextProps = {
  size?: string
  weight?: string
  family?: string
  color?: string
  v_space?: string
  h_space?: string
  isBlend?: boolean
  align?: 'center' | 'left' | 'right'
}

export const MainH = styled.h1<TextProps>`
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.v_space ? `line-height: ${props.v_space};` : '')}
    ${(props) => (props.h_space ? `letter-spacing: ${props.h_space};` : '')}
    ${(props) => (props.align ? `text-align: ${props.align};` : '')}
    ${(props) =>
    props.isBlend ? `filter: invert(100%) grayscale(100%) contrast(100);` : ''}
`

export const LargeH = styled.h2<TextProps>`
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.v_space ? `line-height: ${props.v_space};` : '')}
    ${(props) => (props.h_space ? `letter-spacing: ${props.h_space};` : '')}
    ${(props) =>
    props.isBlend ? `filter: invert(100%) grayscale(100%) contrast(100);` : ''}
`

export const MidH = styled.h3<TextProps>`
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.v_space ? `line-height: ${props.v_space};` : '')}
    ${(props) => (props.h_space ? `letter-spacing: ${props.h_space};` : '')}
    ${(props) =>
    props.isBlend
      ? `filter: invert(100%);
    mix-blend-mode: exclusion;`
      : ''}
`

export const SmallH = styled.h4<TextProps>`
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.v_space ? `line-height: ${props.v_space};` : '')}
    ${(props) => (props.h_space ? `letter-spacing: ${props.h_space};` : '')}
    ${(props) =>
    props.isBlend
      ? `filter: invert(100%);
    mix-blend-mode: exclusion;`
      : ''}
`

export const Sentence = styled.p<TextProps>`
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.v_space ? `line-height: ${props.v_space};` : '')}
    ${(props) => (props.h_space ? `letter-spacing: ${props.h_space};` : '')}
    ${(props) => (props.align ? `text-align: ${props.align};` : '')}
    ${(props) =>
    props.isBlend ? `filter: invert(100%) grayscale(100%) contrast(100);` : ''}
    white-space: pre-wrap;
`

export const Word = styled.span<TextProps>`
  ${(props) => (props.size ? `font-size: ${props.size};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
    ${(props) => (props.family ? `font-family: ${props.family};` : '')}
    ${(props) => (props.color ? `color: ${props.color};` : '')}
    ${(props) => (props.v_space ? `line-height: ${props.v_space};` : '')}
    ${(props) => (props.h_space ? `letter-spacing: ${props.h_space};` : '')}
    ${(props) => (props.align ? `text-align: ${props.align};` : '')}
    ${(props) =>
    props.isBlend ? `filter: invert(100%) grayscale(100%) contrast(100);` : ''}
`
