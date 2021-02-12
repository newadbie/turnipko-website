import { NavItemProps } from '../types'

export const navItems: Array<NavItemProps> = [
  { text: 'Home', to: '/' },
  { text: 'Gallery', to: '/gallery' },
  { text: 'About', to: '/about' },
  { text: 'Pricing', to: '/pricing' },
  {
    text: 'Contact',
    to: process.env.GATSBY_HOMEURL + '/#contact' ?? 'http://localhost:8000'
  }
]
