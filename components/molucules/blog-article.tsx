import { Post } from '../../hooks/usePost'
import { gen } from 'middle'
import { moduler } from '../../utils/styles'
import { LargeH, Word } from '../atoms/text/common'
import { BorderBox } from '../atoms/box/border'
import { pallet } from '../../utils/color'
import { FlexBox } from '../atoms/box/flex'
import { getMonthEngName } from '../../utils/date'

export const BlogArticle = (props: { post: Post }) => {
  const _html = gen(props.post.markdown ?? '', {
    h1: 'md-h1',
    h2: 'md-h2',
    h3: 'md-h3',
    h4: 'md-h4',
    img: 'md-img',
    p: 'md-p',
    a: 'md-a',
    blockquote: 'md-bq',
    pre: 'md-pre',
    code: 'tokyo-night-dark'
  })
  const release = new Date(props.post.release)

  return (
    <>
      <LargeH
        weight={'600'}
        size={moduler(3)}
        h_space={'0.02em'}
        family="'Zen Kaku Gothic New', sans-serif"
      >
        {props.post.title}
      </LargeH>
      <FlexBox way={'row'} padding={'2em 0 1em 0em'} gap={'1em'}>
        <FlexBox way={'row'} alignItems={'center'} gap={'0.5em'}>
          <Word
            size={moduler(-1)}
            h_space={'0.02em'}
            weight={'500'}
            color={pallet.gray03}
          >
            Release
          </Word>
          <Word size={moduler(-1)} h_space={'0.02em'} weight={'500'}>
            {getMonthEngName(release)} {release.getDate()},{' '}
            {release.getFullYear()}
          </Word>
        </FlexBox>
      </FlexBox>
      <BorderBox
        borderPosition={'top'}
        borderWidth={'2px'}
        borderColor={pallet.gray03}
        borderStyle={'dashed'}
        width={'100%'}
        padding={'2em 0 20vh 0'}
      >
        <div
          className="md-wrapper"
          dangerouslySetInnerHTML={{ __html: _html }}
        />
      </BorderBox>
    </>
  )
}
