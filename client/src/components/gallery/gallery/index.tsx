import React, { FC } from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, Grid } from '@material-ui/core'
import Img, { FluidObject } from 'gatsby-image'

import './style.scss'

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
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const categoryImgs = data.allStrapiCategory.edges.map((category, index) => (
    <Grid item xs={10} sm={6} md={4} className="Gallery--category" key={index}>
      <Link to={`/gallery/${category.node.name.replace(/\s+/g, '-')}`}>
        <Img fluid={category.node.photo.childImageSharp.fluid} className="Category--item" />
        <div className="Category--textContainer">
          <span>{category.node.name}</span>
        </div>
      </Link>
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
