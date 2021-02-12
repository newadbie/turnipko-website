import { FC } from 'react'
import { Link } from 'gatsby'

import { NavItemProps } from '../../../types'

import classes from './items.module.css'

const Item: FC<NavItemProps> = ({ to, text, action }) => {
  const actionHandler = () => {
    if (action) {
      action()
    }
  }

  return (
    <Link activeClassName={classes.active} className={classes.Link} to={to} onClick={() => actionHandler()}>
      {text}
    </Link>
  )
}

export default Item
