import React, { FC, useState, useCallback } from 'react'
import { Container } from '@material-ui/core'

import { useStaticQuery, graphql } from 'gatsby'
import Gallery from 'react-photo-gallery'
import Carousel, { ModalGateway, Modal } from 'react-images'

type PhotoType = {
  src: string
  height: number
  width: number
}

type StaticQueryType = {
  allStrapiAlbum: {
    nodes: [
      {
        id: string
        title: string
        createdAt: string
        photos: [
          {
            url: string
            height: number
            width: number
          }
        ]
      }
    ]
  }
}

const LatestItems: FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false)
  // @ts-ignore
  const openLightBox = useCallback((_, { photo, index }: { photo: any; index: number }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightBox = () => {
    setViewerIsOpen(false)
  }

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
          }
        }
      }
    }
  `
  const data: StaticQueryType = useStaticQuery(query)

  const allPhotos: Array<PhotoType> = data.allStrapiAlbum.nodes[0].photos
    .map(photo => ({ src: `http://localhost:1337${photo.url}`, width: photo.width, height: photo.height }))
    .reverse()
    .slice(0, 3) // We catch reversed array because it is by default sorted by DESC, to show recent photos we have to reverse array right here!

  return (
    <Container style={{ marginBottom: '80px' }}>
      <Gallery photos={allPhotos} onClick={openLightBox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentImage}
              views={allPhotos.map(photo => ({
                ...photo,
                source: photo.src
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  )
}

export default LatestItems
