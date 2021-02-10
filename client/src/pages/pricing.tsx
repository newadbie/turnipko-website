import React, { FC, useState } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

import PricingComp from '../components/Pricing'

import { PricingPageProps, PhotoService } from '../types'
import ServiceModal from '../components/Pricing/serviceModal'

type QueryProps = {
  data: {
    strapiPricing: PricingPageProps
  }
}

const Pricing: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedPhotoService, selectPhotoService] = useState<PhotoService>()

  const selectServiceHandler = (newService: PhotoService) => {
    selectPhotoService(newService)
    setIsOpen(true)
  }

  const services = data.strapiPricing.Services
  return (
    <IndexLayout>
      <Baner
        title={data.strapiPricing.PricingBaner.banerText}
        subTitle={data.strapiPricing.PricingBaner.banerSubText}
        fluidObject={data.strapiPricing.PricingBaner.backgroundImg.childImageSharp.fluid}
      />
      <PricingComp selectService={selectServiceHandler} services={services} currency={data.strapiPricing.currency} />
      <ServiceModal
        currency={data.strapiPricing.currency}
        isOpen={isOpen}
        setOpen={setIsOpen}
        photoService={selectedPhotoService ? selectedPhotoService : data.strapiPricing.Services[0]}
      />
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
            fixed(width: 400, height: 370) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
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
