import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import GalleryComp from '../components/gallery/gallery'
import IndexLayout from '../layouts'

const Gallery: FC<PageProps> = ({ data }: any) => {
  return (
    <IndexLayout>
      <Baner
        title="Gallery"
        fluidObject={data.placeholderImage.childImageSharp.fluid}
        subTitle="Click on the picture to visit specific gallery"
      />
      <GalleryComp />
    </IndexLayout>
  )
}

export default Gallery

export const PageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "PortfolioBg.png" }) {
      childImageSharp {
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
