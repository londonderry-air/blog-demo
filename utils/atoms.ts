import { atom } from 'recoil'

export const bgState = atom<{ right: string; left: string }>({
  key: 'background-colors',
  default: { right: '#FFFFFF', left: '#FFFFFF' }
})

export const transitionState = atom<boolean>({
  key: 'transition',
  default: false
})

export const prevBgState = atom<{ right: string; left: string }>({
  key: 'prev-background-colors',
  default: { right: '#F27B7B', left: '#F4F4F4' }
})

export const headState = atom<{
  title: string
  ogImage: string
}>({
  key: 'head',
  default: { title: 'Tomoki Shimizu', ogImage: './dog.png' }
})
