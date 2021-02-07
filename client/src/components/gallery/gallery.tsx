import React, { FC } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { Container, Grid } from '@material-ui/core'
import Img, { FluidObject } from 'gatsby-image'

import './gallery.css'

type QueryType = {
  allStrapiCategory: {
    edges: [
      {
        node: {
          name: string
          id: string
          photo: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      }
    ]
  }
}

const Gallery: FC = () => {
  const data: QueryType = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        edges {
          node {
            name
            id
            photo {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const categoryImgs = data.allStrapiCategory.edges.map(category => (
    <Grid item xs={10} sm={6} md={4} className="Gallery--category">
      <a href={`/gallery/${category.node.id}`}>
        <Img fluid={category.node.photo.childImageSharp.fluid} className="Category--item" />
        <div className="Category--textContainer">
          <span>{category.node.name}</span>
        </div>
      </a>
    </Grid>
  ))

  return (
    <section>
      <Container>
        <Grid container className="Gallery--grid">
          {categoryImgs}
        </Grid>
      </Container>
    </section>
  )
}

export default Gallery
