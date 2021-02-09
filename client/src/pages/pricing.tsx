import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

type QueryProps = {
  data: {
    strapiPricing: {
      banerImg: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const Pricing: FC<PageProps & QueryProps> = (data: QueryProps) => {
  return (
    <IndexLayout>
      <Baner
        title="Pricing"
        subTitle="Click on product to see details"
        fluidObject={data.data.strapiPricing.banerImg.childImageSharp.fluid}
      />
    </IndexLayout>
  )
}

export default Pricing

export const PageQuery = graphql`
  query {
    strapiPricing {
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
