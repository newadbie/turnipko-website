import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import { Container } from '@material-ui/core'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import classes from './singleAlbum.module.css'
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

type NodeType = {
  node: {
    category: {
      name: string
      photo: {
        localFile: {
          childImageSharp: {
            fluid: FluidObject
          }
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

type QueryType = {
  data: {
    allStrapiAlbum: {
      edges: Array<NodeType>
    }
  }
}

const SingleAlbum = ({ data }: QueryType) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false)

  const categoryData = data.allStrapiAlbum.edges[0] ? data.allStrapiAlbum.edges[0].node.category : null

  // @ts-ignore
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
        src: `${process.env.GATSBY_API_URL}${photo.url}`
      })
    })
  )

  return (
    <IndexLayout>
      {categoryData ? (
        <>
          <Baner title={categoryData.name} fluidObject={categoryData.photo.localFile.childImageSharp.fluid} />
          <Container className={classes.SingleAlbum}>
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
          </Container>
        </>
      ) : (
        <Container>
          <h1>Not found</h1>
        </Container>
      )}
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
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
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
