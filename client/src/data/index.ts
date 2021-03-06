import { NavItemProps } from '../types'

export const navItems: Array<NavItemProps> = [
  { text: 'Home', to: '/' },
  { text: 'Gallery', to: '/gallery/', partiallyActive: true },
  { text: 'About', to: '/about/' },
  { text: 'Pricing', to: '/pricing/' },
  {
    text: 'Contact',
    to: '/#contact',
    isSmooth: true
  }
]
