import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { headState } from '../../utils/atoms'

export const PortfolioHead = () => {
  const head = useRecoilValue(headState)
  const router = useRouter()
  return (
    <Head>
      <title>{head.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:title" content={head.title} />
      <meta property="og:image" content={head.ogImage} />
    </Head>
  )
}
