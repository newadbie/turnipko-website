import React, { FC } from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'
import { Container, Grid } from '@material-ui/core'
import Img from 'gatsby-image'

import { CategoryProps } from '../../types'

import classes from './gallery.module.css'

type GroupProps = {
  nodes: Array<CategoryProps>
}

type QueryType = {
  allStrapiAlbum: {
    group: Array<GroupProps>
  }
}

const GalleryComp: FC = () => {
  const data: QueryType = useStaticQuery(graphql`
    query {
      allStrapiAlbum {
        group(field: category___id, limit: 1) {
          nodes {
            category {
              name
              photo {
                localFile {
                  childImageSharp {
                    fixed(width: 378, height: 251) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const allCategories: Array<CategoryProps> = []
  data.allStrapiAlbum.group.map(gr => {
    gr.nodes.map((node: any) => {
      allCategories.push({ name: node.category.name, photo: node.category.photo })
    })
  })

  const categoryImgs = allCategories.map((category, index) => (
    <Grid key={index} item xs={10} sm={6} md={4} className={classes.Category}>
      <Link to={`/gallery/${category.name.replace(/\s+/g, '-')}`}>
        <Img fixed={category.photo.localFile.childImageSharp.fixed} className={classes.Item} />
        <div className={classes.TextContainer}>
          <span>{category.name}</span>
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

export default GalleryComp
