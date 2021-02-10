import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

import { PricingPageProps } from '../types'

type QueryProps = {
  data: {
    strapiPricing: PricingPageProps
  }
}

const Pricing: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  return (
    <IndexLayout>
      <Baner
        title={data.strapiPricing.PricingBaner.banerText}
        subTitle={data.strapiPricing.PricingBaner.banerSubText}
        fluidObject={data.strapiPricing.PricingBaner.backgroundImg.childImageSharp.fluid}
      />
    </IndexLayout>
  )
}

export default Pricing

export const PageQuery = graphql`
  query {
    strapiPricing {
      PricingBaner {
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
