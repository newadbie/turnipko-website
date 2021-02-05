import React, { FC } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'

const Gallery: FC = () => {
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

  return (
    <section>
      <Grid container></Grid>
    </section>
  )
}

export default Gallery
