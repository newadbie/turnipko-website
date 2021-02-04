import React, { FC } from 'react'
import Item from './item'

import { appBarItems } from '../../mock'

import './items.css'

const Items: FC = () => {
  return (
    <div className="Items--wrapper">
      {appBarItems.map(item => (
        <Item to={item.to} key={item.to} text={item.text} />
      ))}
    </div>
  )
}

export default Items
