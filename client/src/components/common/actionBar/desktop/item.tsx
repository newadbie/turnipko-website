import { FC } from 'react'

import { NavItemProps } from '../../../../types'

import classes from './items.module.css'

import { RedirectLink } from '../../../../utils'

const Item: FC<NavItemProps> = ({ to, text, action }) => {
  return (
    <RedirectLink activeClassName={classes.active} className={classes.Link} to={to} action={action}>
      {text}
    </RedirectLink>
  )
}

export default Item
