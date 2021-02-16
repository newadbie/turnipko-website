import React, { FC, useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Gallery from 'react-photo-gallery'
import Carousel, { ModalGateway, Modal } from 'react-images'

import { StrapiAlbumProps } from '../../../types'
import { GetPhotoTypesFromGallery } from '../../../utils'
import { Container } from '@material-ui/core'

import classes from './latest.module.css'

interface StaticQueryType {
  strapiAlbum: {
    photos: Array<StrapiAlbumProps>
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
      strapiAlbum {
        photos {
          alternativeText
          localFile {
            childImageSharp {
              small: fixed(width: 800) {
                width
                height
                srcWebp
              }
              large: fixed(width: 1980) {
                width
                height
                srcWebp
              }
            }
          }
        }
      }
    }
  `
  const data: StaticQueryType = useStaticQuery(query)
  const photosToGallery = GetPhotoTypesFromGallery(data.strapiAlbum.photos).slice(0,3);

  return (
    <Container className={classes.Container}>
      <Gallery photos={photosToGallery.map(photo => photo.small)} onClick={openLightBox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentImage}
              views={photosToGallery.map(photo => ({
                ...photo.large,
                source: photo.large.src
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  )
}

export default LatestItems
