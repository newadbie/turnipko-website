import { FC } from 'react'
import { Link } from 'gatsby'

import { StrapiAlbumProps, PhotoType } from '../types'

type RedirectProps = {
  to: string
  activeClassName?: string
  className?: string
  partiallyActive?: boolean
  action?: () => void
}

export const RedirectLink: FC<RedirectProps> = ({ children, to, activeClassName, partiallyActive, className, action }) => {
  const actionHandler = () => {
    if (action) {
      action()
    }
  }
  // return <a href={to}>{children}</a>
  if (process.env.GATSBY_HOMEURL && to.includes(process.env.GATSBY_HOMEURL)) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    )
  } else {
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
