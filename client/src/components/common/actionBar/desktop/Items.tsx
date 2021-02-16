import React, { FC } from 'react'
import Item from './item'

import { navItems } from '../../../../data'

import classes from '../appBar.module.css'

const Items: FC = () => {
  return (
    <div className={classes.Wrapper}>
      {navItems.map(item => (
        <Item partiallyActive={item.partiallyActive} to={item.to} key={item.to} text={item.text} />
      ))}
    </div>
  )
}

export default Items
