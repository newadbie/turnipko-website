import { FC } from 'react'
import { Link } from 'gatsby'

import { NavItemProps } from '../../../../types'

import classes from '../appBar.module.css'

const Item: FC<NavItemProps> = ({ to, text, action, partiallyActive }) => {
  const actionHandler = () => {
    if (action) {
      action()
    }
  }


  if (process.env.GATSBY_HOMEURL && to.includes(process.env.GATSBY_HOMEURL)) {
    return (
      <a href={to} className={classes.Link}>
        {text}
      </a>
    )
  } else {
    return (
      <Link
        to={to}
        partiallyActive={partiallyActive}
        activeClassName={classes.active}
        className={classes.Link}
        onClick={() => actionHandler()}
      >
        {text}
      </Link>
    )
  }
}

export default Item
