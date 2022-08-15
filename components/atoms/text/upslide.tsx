import { Sentence, TextProps } from './common'
import { Box } from '../box/common'
import { TransformBox } from '../box/transform'

export const UpslideSentence = (
  props: TextProps & {
    deg: string
    isShow: boolean
    children: string
  }
) => {
  return (
    <Box height={props.size ?? '1em'} overflow={'hidden'}>
      <TransformBox
        origin={'center'}
        transition={1.5}
        transform={
          props.isShow
            ? 'translateY(0) rotateZ(0deg)'
            : `translateY(calc(${props.size ?? '1em'} * 4)) rotateZ(${
                props.deg
              }deg)`
        }
      >
        <Sentence {...props}>{props.children}</Sentence>
      </TransformBox>
    </Box>
  )
}
