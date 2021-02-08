import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import { Container } from '@material-ui/core'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import './singleAlbum.css'
import { FluidObject } from 'gatsby-image'
import Baner from '../components/common/banner'

type PhotoType = {
  src: string
  srcSet?: string | string[] | undefined
  sizes?: string | string[] | undefined
  width: number
  height: number
  alt?: string | undefined
  key?: string | undefined
}

type QueryType = {
  data: {
    allStrapiAlbum: {
      edges: [
        {
          node: {
            category: {
              name: string
              photo: {
                childImageSharp: {
                  fluid: FluidObject
                }
              }
            }
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

  const categoryData = data.allStrapiAlbum.edges[0].node.category

  const openLightBox = useCallback((_, { photo, index }: { photo: any; index: number }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightBox = () => {
    setViewerIsOpen(false)
  }

  const photos: Array<PhotoType> = []
  data.allStrapiAlbum.edges.forEach(edge =>
    edge.node.photos.forEach(photo => {
      // To fetch the newest photo reverse gallery
      photos.push({
        width: photo.width,
        height: photo.height,
        src: `http://localhost:1337${photo.url}`
      })
    })
  )

  console.log(data)
  return (
    <IndexLayout>
      <Baner title={categoryData.name} fluidObject={categoryData.photo.childImageSharp.fluid} />
      <Container className="SingleAlbum">
        {photos !== undefined ? (
          <>
            <Gallery photos={photos.reverse()} onClick={openLightBox} />
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
          category {
            name
            photo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
