import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

const Pricing: FC<PageProps> = ({ data }: any) => {
  return (
    <IndexLayout>
      <Baner title="Pricing" subTitle="Click on product to see details" fluidObject={data.placeholderImage.childImageSharp.fluid} />
    </IndexLayout>
  )
}

export default Pricing

export const PageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "PenBG.png" }) {
      childImageSharp {
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
