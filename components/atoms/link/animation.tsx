import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { bgState } from '../../../utils/atoms'
import {
  colorMqTransitions,
  colorTransitions,
  PAGE_TRANSITION_DURING
} from '../../../utils/transition'

export const AnimLink = (props: {
  href: string
  width?: string
  font?: { weight?: string; color?: string; size?: string }
  color: { right: string; left: string }
  children: React.ReactNode | string
}) => {
  const router = useRouter()
  const isMQ = useMediaQuery()
  const setColor = useSetRecoilState(bgState)
  const font = props.font ?? {}
  const [_color, _setColor] = useState(props.color)

  useEffect(() => {
    const fixColors = isMQ
      ? colorMqTransitions.filter((c) => c.path === props.href)
      : colorTransitions.filter((c) => c.path === props.href)
    if (fixColors.length > 0) {
      _setColor(fixColors[0].color)
    }
  }, [isMQ])

  useEffect(() => {
    _setColor(props.color)
  }, [props.color])

  return (
    <Anchor
      width={props.width}
      weight={font.weight}
      size={font.size}
      color={font.color}
      onClick={(e) => {
        e.preventDefault()
        setColor(_color)
        setTimeout(() => router.push(props.href), PAGE_TRANSITION_DURING * 1000)
      }}
    >
      {props.children}
    </Anchor>
  )
}

const Anchor = styled.a<{
  width?: string
  weight?: string
  color?: string
  size?: string
}>`
  width: ${(props) => props.width ?? 'auto'};
  font-weight: ${(props) => props.weight ?? '400'};
  font-size: ${(props) => props.size ?? '1em'};
  color: ${(props) => props.color ?? 'auto'};
  cursor: pointer;
`
