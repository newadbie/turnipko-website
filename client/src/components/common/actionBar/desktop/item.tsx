import { FC } from 'react'
import { Link } from 'gatsby'

import { NavItemProps } from '../../../../types'

import { RedirectLink } from '../../../../utils'

import classes from '../appBar.module.css'

const Item: FC<NavItemProps> = nav => {
  return (
    <RedirectLink className={classes.Link} activeClassName={classes.active} {...nav}>
      {nav.text}
    </RedirectLink>
  )
}

export default Item
