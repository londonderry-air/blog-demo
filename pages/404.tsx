import { ColorBox } from '../components/atoms/box/color'
import { FlexBox } from '../components/atoms/box/flex'
import { LargeH, Word } from '../components/atoms/text/common'
import { pallet } from '../utils/color'
import { moduler } from '../utils/styles'

export const page = () => {
  return (
    <FlexBox
      way={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      height={'100%'}
      gap={'1em'}
    >
      <ColorBox
        width={'100px'}
        height={'100px'}
        radius={'10000px'}
        background={pallet.gray01}
      >
        <FlexBox
          width={'100%'}
          height={'100%'}
          way={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Word size={moduler(6)} weight={'600'} h_space={'0.04em'}>
            🙇‍♂️
          </Word>
        </FlexBox>
      </ColorBox>
      <LargeH size={moduler(5)} weight={'600'} h_space={'0.1em'}>
        SORRY
      </LargeH>
      <Word size={moduler(-1)} weight={'600'} h_space={'0.04em'}>
        お探しのページは見つかりませんでした
      </Word>
    </FlexBox>
  )
}

export default page
