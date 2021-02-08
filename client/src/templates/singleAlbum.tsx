import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import { Container } from '@material-ui/core'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import './singleAlbum.css'

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
              }
            ]
          }
        }
      ]
    }
  }
}

const SingleAlbum = ({ data }: QueryType) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false)

  const openLightBox = useCallback((event, { photo, index }: { photo: any; index: number }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightBox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photos = data.allStrapiAlbum.edges
    .map(edge =>
      edge.node.photos.map(photo => ({
        // rows: photo.width > photo.height ? 1 : 2,
        width: photo.width,
        height: photo.height,
        src: `http://localhost:1337${photo.url}`
      }))
    )
    .pop()
    ?.reverse() // To get sorted data by the recent photos reverse the gallery

  return (
    <IndexLayout>
      <Container className="SingleAlbum">
        {photos !== undefined ? (
          <>
            <Gallery photos={photos} onClick={openLightBox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightBox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(photo => ({
                      ...photo,
                      source: photo.src
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </>
        ) : (
          ''
        )}

        {/* <GridList cols={3}>
          {photos?.map((photo, index) => (
            <GridListTile rows={photo.rows} key={index}>
              <img src={photo.url} />
            </GridListTile>
          ))}
        </GridList> */}
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
          }
        }
      }
    }
  }
`
export default SingleAlbum
