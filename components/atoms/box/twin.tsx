import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { bgState } from '../../../utils/atoms'
import { ColorBox } from './color'
import { Box } from './common'
import { FlexBox } from './flex'
import { TransformBox } from './transform'

export const TwinBox = (props: {
  index: number
  state: 'stop' | 'move'
  transition: number
}) => {
  const isMQ = useMediaQuery()
  const _color = useRecoilValue(bgState)
  const [color, setColor] = useState(_color)
  const isStop = props.state === 'stop'
  const isMove = props.state === 'move'
  const isFront = props.index > 0
  const isBack = props.index < 0

  useEffect(() => {
    if (props.state === 'move') {
      setColor({ right: _color.right, left: _color.left })
    }
  }, [props.state])

  return (
    <FlexBox
      position={'absolute'}
      way={isMQ ? 'column' : 'row'}
      width={'100%'}
      height={'100%'}
      zIndex={String(props.index)}
      pointerEvents={'none'}
    >
      <Box position={'relative'} width={isMQ ? '100%' : '50%'} height={'100%'}>
        <TransformBox
          width={'100%'}
          height={'100%'}
          position={'absolute'}
          transform={
            isStop
              ? isBack
                ? 'translateY(0%)'
                : 'translateY(-100%)'
              : isBack
              ? 'translateY(0%)'
              : 'translateY(0%)'
          }
          transition={isFront && isMove ? props.transition : 0}
        >
          <ColorBox
            width={'100%'}
            height={'100%'}
            background={color.left}
            transition={0}
          ></ColorBox>
        </TransformBox>
      </Box>
      <Box position={'relative'} width={isMQ ? '100%' : '50%'} height={'100%'}>
        <TransformBox
          width={'100%'}
          height={'100%'}
          position={'absolute'}
          transform={
            isStop
              ? isBack
                ? 'translateY(0%)'
                : 'translateY(100%)'
              : isBack
              ? 'translateY(0%)'
              : 'translateY(0%)'
          }
          transition={isFront && isMove ? props.transition : 0}
        >
          <ColorBox
            width={'100%'}
            height={'100%'}
            background={color.right}
            transition={0}
          ></ColorBox>
        </TransformBox>
      </Box>
    </FlexBox>
  )
}
