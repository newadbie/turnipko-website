import { FC } from 'react'
import { Link, withPrefix } from 'gatsby'

import { StrapiAlbumProps, PhotoType } from '../types'
import scrollTo from 'gatsby-plugin-smoothscroll';

type RedirectProps = {
  to: string
  activeClassName?: string
  className?: string
  isSmooth?: boolean
  partiallyActive?: boolean
  action?: () => void
}

export const isHomePage = (): Boolean => {
  return typeof window !== 'undefined' && window.location.pathname === withPrefix('/')
}

export const RedirectLink: FC<RedirectProps> = ({ children, to, activeClassName, partiallyActive, className, action, isSmooth }) => {
  const actionHandler = () => {
    if (action) {
      action()
    }
  }
  
  if (isHomePage() && isSmooth === true) {
    return (
      <a
        className={className}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setTimeout(() => {
            scrollTo("#contact");
          }, 300)
        }}
      >
        {children}
      </a>
    )
  }

    return (
      <Link
        to={to}
        partiallyActive={partiallyActive}
        activeClassName={activeClassName}
        className={className}
        onClick={() => actionHandler()}
      >
        {children}
      </Link>
    )
  
}

export const GetPhotoTypesFromGallery = (gallery: Array<StrapiAlbumProps>): Array<{ small: PhotoType; large: PhotoType }> => {
  return gallery.map(photo => ({
    small: {
      width: photo.localFile.childImageSharp.small.width,
      height: photo.localFile.childImageSharp.small.height,
      src: photo.localFile.childImageSharp.small.srcWebp,
      alt: photo.alt
    },
    large: {
      width: photo.localFile.childImageSharp.large.width,
      height: photo.localFile.childImageSharp.large.height,
      src: photo.localFile.childImageSharp.large.srcWebp,
      alt: photo.alt
    }
  }))
}
