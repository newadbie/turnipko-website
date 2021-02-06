import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import LatestItem from './latestItem'

import { useStaticQuery, graphql } from 'gatsby'

const LatestItems: FC = () => {
  const query = graphql`
    query {
      allStrapiGallery(limit: 3, sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)

  const items = data.allStrapiGallery.edges
  return (
    <Grid container spacing={6} style={{ display: 'flex', marginBottom: '80px', alignItems: 'center', justifyContent: 'center' }}>
      {items.map((item: any, index: number) => {
        if (item.childImageSharp === null) return null
        return <LatestItem fluidObject={item.node.thumb.childImageSharp.fluid} key={index} />
      })}
    </Grid>
  )
}

export default LatestItems
