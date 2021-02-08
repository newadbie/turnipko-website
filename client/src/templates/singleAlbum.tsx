import React from 'react'

import { graphql } from 'gatsby'
import IndexLayout from '../layouts'
import { Container, GridList } from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'

type QueryType = {
  data: {
    allStrapiAlbum: {
      edges: [
        {
          node: {
            photos: [
              {
                url: string
                width: number
                height: number
                updatedAt: string
              }
            ]
          }
        }
      ]
    }
  }
}

const SingleAlbum = ({ data }: QueryType) => {
  const photos = data.allStrapiAlbum.edges
    .map(edge =>
      edge.node.photos.map(photo => ({
        rows: photo.width > photo.height ? 1 : 2,
        url: `http://localhost:1337${photo.url}`,
        updatedAt: photo.updatedAt
      }))
    )
    .pop()
    ?.reverse() // To get sorted data by the recent photos reverse the gallery

  return (
    <IndexLayout>
      <Container>
        <GridList cols={3}>
          {photos?.map((photo, index) => (
            <GridListTile rows={photo.rows} key={index}>
              <img src={photo.url} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </IndexLayout>
  )
}

export const query = graphql`
  query AlbumQuery($id: String!) {
    allStrapiAlbum(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          photos {
            url
            width
            height
            updatedAt
          }
        }
      }
    }
  }
`
export default SingleAlbum
