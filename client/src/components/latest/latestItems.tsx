import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import LatestItem from './latestItem'

import { useStaticQuery, graphql } from 'gatsby'

type PhotoType = {
  url: string
  height: number
  width: string
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
            height
            width
            createdAt
          }
        }
      }
    }
  `
  const data: StaticQueryType = useStaticQuery(query)

  const photosSrc: Array<string> = []
  const allPhotos: Array<PhotoType> = data.allStrapiAlbum.nodes[0].photos.reverse() // We catch reversed array because it is default sorted by DESC, to show recent photos we have to reverse array right here!

  allPhotos.map(photo => {
    if (photosSrc.length < 3 && photo.height >= 1000) {
      photosSrc.push(`http://localhost:1337${photo.url}`)
    }
  })

  return (
    <Grid container spacing={6} style={{ display: 'flex', marginBottom: '80px', alignItems: 'center', justifyContent: 'center' }}>
      {photosSrc.map((src: any, index: number) => {
        return <LatestItem imgSrc={src} key={index} />
      })}
    </Grid>
  )
}

export default LatestItems
