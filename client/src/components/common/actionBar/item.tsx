import React, { FC } from 'react'
import { Link } from 'gatsby'

export interface AppBarProps {
  to: string
  text: string
}

const Item: FC<AppBarProps> = ({ to, text }) => {
  return (
    <Link activeClassName="active" className="Item--link" to={to}>
      {text}
    </Link>
  )
}

export default Item
