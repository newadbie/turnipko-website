import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import GalleryComp from '../components/Gallery/gallery'
import IndexLayout from '../layouts'

import { GalleryPageProps } from '../types'

type QueryProps = {
  data: {
    strapiGallery: GalleryPageProps
  }
}

const Gallery: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  return (
    <IndexLayout>
      <Baner
        title={data.strapiGallery.GalleryBaner.banerText}
        fluidObject={data.strapiGallery.GalleryBaner.backgroundImg.childImageSharp.fluid}
        subTitle={data.strapiGallery.GalleryBaner.banerSubText}
      />
      <GalleryComp />
    </IndexLayout>
  )
}

export default Gallery

export const PageQuery = graphql`
  query {
    strapiGallery {
      GalleryBaner {
        banerText
        banerSubText
        backgroundImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
