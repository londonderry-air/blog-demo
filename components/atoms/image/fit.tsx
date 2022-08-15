import { Image as CozyImage } from './common'
import { useCallback, useEffect, useState } from 'react'

export const FitImage = (props: {
  width: string
  height: string
  src: string
}) => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const load = () => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = (e) => reject(e)
      img.src = props.src
    })
  }

  const loadImage = useCallback(async () => {
    const result = await load()
    if (result.width && result.height) {
      setSize({ width: result.width, height: result.height })
    }
  }, [])

  useEffect(() => {
    loadImage()
  }, [])

  return (
    <CozyImage
      width={'100%'}
      height={`${(size.height / size.width) * 100}%`}
      src={props.src}
      fit={'cover'}
    />
  )
}
