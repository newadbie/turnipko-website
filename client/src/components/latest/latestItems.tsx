import { Grid } from '@material-ui/core'
import { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import LatestItem from './latestItem'

import { useStaticQuery, graphql } from 'gatsby'

const LatestItems: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "latestGallery" } }) {
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
  console.log(data)
  return (
    <Grid container spacing={3}>
      {items.map((item: any, index: number) => {
        if (item.childImageSharp === null) return null
        return <LatestItem fluidObject={item.childImageSharp.fluid} key={index} />
      })}
    </Grid>
  )
}

export default LatestItems
