import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

import PricingComp from '../components/Pricing'

import { PricingPageProps } from '../types'

type QueryProps = {
  data: {
    strapiPricing: PricingPageProps
  }
}

const Pricing: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  const services = data.strapiPricing.Services
  return (
    <IndexLayout>
      <Baner
        title={data.strapiPricing.PricingBaner.banerText}
        subTitle={data.strapiPricing.PricingBaner.banerSubText}
        fluidObject={data.strapiPricing.PricingBaner.backgroundImg.childImageSharp.fluid}
      />
      <PricingComp services={services} currency={data.strapiPricing.currency} />
    </IndexLayout>
  )
}

export default Pricing

export const PageQuery = graphql`
  query {
    strapiPricing {
      currency
      Services {
        offert
        price
        title
        backgroundImg {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }

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
