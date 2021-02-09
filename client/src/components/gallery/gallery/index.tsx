import React, { FC } from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, Grid } from '@material-ui/core'
import Img, { FluidObject } from 'gatsby-image'

import classes from './gallery.module.css'

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
    <Grid item xs={10} sm={6} md={4} className={classes.Category}>
      <Link to={`/gallery/${category.node.name.replace(/\s+/g, '-')}`}>
        <Img fluid={category.node.photo.childImageSharp.fluid} className={classes.Item} />
        <div className={classes.TextContainer}>
          <span>{category.node.name}</span>
        </div>
      </Link>
    </Grid>
  ))

  return (
    <section>
      <Container>
        <Grid container className={classes.Grid}>
          {categoryImgs}
        </Grid>
      </Container>
    </section>
  )
}

export default Gallery
