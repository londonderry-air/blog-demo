export const PAGE_TRANSITION_DURING = 1
export const colorTransitions = [
  { path: '/', color: { right: '#FFFFFF', left: '#FFFFFF' } },
  { path: '/blog', color: { right: '#F7F7F7', left: '#F27B7B' } },
  { path: '/about', color: { right: '#456fcb', left: '#456fcb' } }
]

export const colorMqTransitions = [
  { path: '/', color: { right: '#FFFFFF', left: '#FFFFFF' } },
  { path: '/blog', color: { right: '#F7F7F7', left: '#F7F7F7' } },
  { path: '/about', color: { right: '#456fcb', left: '#456fcb' } }
]

export const getColorTransition = (path: string) => {
  return colorTransitions.filter((ct) => ct.path === path).length > 0
    ? colorTransitions.filter((ct) => ct.path === path)[0].color
    : { right: '#FFFFFF', left: '#FFFFFF' }
}

export const getColorMobileTransition = (path: string) => {
  return colorMqTransitions.filter((ct) => ct.path === path).length > 0
    ? colorMqTransitions.filter((ct) => ct.path === path)[0].color
    : { right: '#FFFFFF', left: '#FFFFFF' }
}
