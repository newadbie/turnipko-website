import React, { FC } from 'react'
import Item from './item'

import { useStaticQuery, graphql } from 'gatsby'

const Items: FC = () => {
  const query = graphql`
    query fetchAllNavarItems {
      allStrapiNav(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            text
            anchor
            order
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)

  const appBarItems: Array<any> = data.allStrapiNav.edges.map((navItem: any) => {
    return { to: navItem.node.anchor, text: navItem.node.text }
  })

  return (
    <div className="Items--wrapper">
      {appBarItems.map(item => (
        <Item to={item.to} key={item.to} text={item.text} />
      ))}
    </div>
  )
}

export default Items
