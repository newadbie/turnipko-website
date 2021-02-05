import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

const Portfolio: FC<PageProps> = ({ data }: any) => {
  return (
    <IndexLayout>
      <Baner
        title="My portfolio"
        fluidObject={data.placeholderImage.childImageSharp.fluid}
        subTitle="Click on the picture to visit specific gallery"
      />
    </IndexLayout>
  )
}

export default Portfolio

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
