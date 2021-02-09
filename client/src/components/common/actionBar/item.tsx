import React, { FC } from 'react'
import { Link } from 'gatsby'

import classes from './items.module.css'

export interface AppBarProps {
  to: string
  text: string
}

const Item: FC<AppBarProps> = ({ to, text }) => {
  return (
    <Link activeClassName={classes.active} className={classes.Link} to={to}>
      {text}
    </Link>
  )
}

export default Item
