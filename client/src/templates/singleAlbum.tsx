import React, { useState, useCallback } from 'react'
import { graphql, navigate } from 'gatsby'
import { Container } from '@material-ui/core'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import classes from './singleAlbum.module.css'
import Baner from '../components/common/banner'
import IndexLayout from '../layouts'
import { SingleAlbumProps } from '../types'
import { GetPhotoTypesFromGallery } from '../utils'

type QueryType = {
  data: {
    allStrapiAlbum: {
      nodes: Array<SingleAlbumProps>
    }
  }
}

const SingleAlbum = ({ data }: QueryType) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false)

  const categoryData = data.allStrapiAlbum.nodes.length > 0 ? data.allStrapiAlbum.nodes[0].category : undefined

  // @ts-ignore
  const openLightBox = useCallback((_, { photo, index }: { photo: any; index: number }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightBox = () => {
    setViewerIsOpen(false)
  }

  if (categoryData === undefined) {
    navigate("/404");
    return null;
  }

  const photosToGallery = GetPhotoTypesFromGallery(data.allStrapiAlbum.nodes[0].photos)
  return (
    <IndexLayout>
      <Baner title={categoryData.name} fluidObject={categoryData.photo.localFile.childImageSharp.fluid} />
      <Container className={classes.SingleAlbum}>
        {photosToGallery !== undefined ? (
          <>
            <Gallery photos={photosToGallery.map(photo => photo.small)} onClick={openLightBox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal closeOnBackdropClick={false} onClose={closeLightBox}>
                  <Carousel
                    modalProps={{ isFullscreen: true, allowFullscreen: true }}
                    currentIndex={currentImage}
                    views={photosToGallery.map(photo => ({
                      ...photo.large,
                      source: photo.large.src
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
    </IndexLayout>
  )
}

export const query = graphql`
  query AlbumQuery($id: String!) {
    allStrapiAlbum(filter: { category: { id: { eq: $id } } }) {
      nodes {
        photos {
          localFile {
            childImageSharp {
              small: fixed(width: 800) {
                width
                srcWebp
                height
              }
              large: fixed(width: 1480) {
                width
                srcWebp
                height
              }
            }
          }
        }
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
      }
    }
  }
`
export default SingleAlbum
