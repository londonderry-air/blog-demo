import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query
  const slug = query.slug ? ['', ...(query.slug as string[])].join('/') : null

  if (!slug) {
    return res.status(404).json({
      message: 'revalidate target not found'
    })
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(slug)
    if (process.env.NODE_ENV === 'development')
      console.log('revalidate success')
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
