import { FC } from 'react'
import { Link } from 'gatsby'

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
