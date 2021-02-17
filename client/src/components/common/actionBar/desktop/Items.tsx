import React, { FC } from 'react'
import Item from './item'

import { navItems } from '../../../../data'

import classes from '../appBar.module.css'

const Items: FC = () => {
  return (
    <div className={classes.Wrapper}>
      {navItems.map(item => (
        <Item {...item} key={item.to} />
      ))}
    </div>
  )
}

export default Items
