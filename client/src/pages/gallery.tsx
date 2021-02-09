import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Baner from '../components/common/banner'
import GalleryComp from '../components/gallery/gallery'
import IndexLayout from '../layouts'

type QueryProps = {
  data: {
    strapiGallery: {
      banerImg: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const Gallery: FC<PageProps & QueryProps> = (data: QueryProps) => {
  return (
    <IndexLayout>
      <Baner
        title="Gallery"
        fluidObject={data.data.strapiGallery.banerImg.childImageSharp.fluid}
        subTitle="Click on the picture to visit specific gallery"
      />
      <GalleryComp />
    </IndexLayout>
  )
}

export default Gallery

export const PageQuery = graphql`
  query {
    strapiGallery {
      banerImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
