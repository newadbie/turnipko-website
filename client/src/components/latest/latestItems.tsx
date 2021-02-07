import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import LatestItem from './latestItem'

import { useStaticQuery, graphql } from 'gatsby'

type PhotoType = {
  url: string
}

type StaticQueryType = {
  allStrapiAlbum: {
    nodes: [
      {
        id: string
        title: string
        createdAt: string
        photos: Array<PhotoType>
      }
    ]
  }
}

const LatestItems: FC = () => {
  const query = graphql`
    {
      allStrapiAlbum(sort: { fields: createdAt, order: DESC }, limit: 1) {
        nodes {
          id
          title
          createdAt
          photos {
            url
          }
        }
      }
    }
  `
  const data: StaticQueryType = useStaticQuery(query)

  const photosSrc: Array<string> = []
  const allPhotos: Array<any> = data.allStrapiAlbum.nodes[0].photos

  const forIterator: number = allPhotos.length >= 3 ? 3 : allPhotos.length

  for (let i = 0; i < forIterator; i++) {
    photosSrc.push(`http://localhost:1337${allPhotos[i].url}`)
  }

  return (
    <Grid container spacing={6} style={{ display: 'flex', marginBottom: '80px', alignItems: 'center', justifyContent: 'center' }}>
      {photosSrc.map((src: any, index: number) => {
        return <LatestItem imgSrc={src} key={index} />
      })}
    </Grid>
  )
}

export default LatestItems
