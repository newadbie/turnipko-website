import { FC } from 'react'
import { Link } from 'gatsby'

type RedirectProps = {
  to: string
  activeClassName?: string
  className?: string
  action?: () => void
}

export const RedirectLink: FC<RedirectProps> = ({ children, to, activeClassName, className, action }) => {
  const actionHandler = () => {
    if (action) {
      action()
    }
  }
  // return <a href={to}>{children}</a>
  if (process.env.GATSBY_HOMEURL && to.includes(process.env.GATSBY_HOMEURL)) {
    return <a href={to}>{children}</a>
  } else {
    return (
      <Link to={to} activeClassName={activeClassName} className={className} onClick={() => actionHandler()}>
        {children}
      </Link>
    )
  }
}
