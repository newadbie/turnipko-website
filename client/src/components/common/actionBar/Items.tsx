import React, { FC } from 'react'
import Item from './item'

import { navItems } from '../../../data'

import classes from './items.module.css'

const Items: FC = () => {
  return (
    <div className={classes.Wrapper}>
      {navItems.map(item => (
        <Item to={item.to} key={item.to} text={item.text} />
      ))}
    </div>
  )
}

export default Items
