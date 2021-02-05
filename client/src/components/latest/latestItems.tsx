import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import LatestItem from './latestItem'

import { useStaticQuery, graphql } from 'gatsby'

const LatestItems: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "latestGallery" } }, limit: 3) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const items = data.allFile.nodes
  return (
    <Grid container spacing={6} style={{ display: 'flex', marginBottom: '80px', alignItems: 'center', justifyContent: 'center' }}>
      {items.map((item: any, index: number) => {
        if (item.childImageSharp === null) return null
        return <LatestItem fluidObject={item.childImageSharp.fluid} key={index} />
      })}
    </Grid>
  )
}

export default LatestItems
