import { FixedObject, FluidObject } from 'gatsby-image'

export type BanerProps = {
  banerText: string
  banerSubText?: string
  backgroundImg: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export type ContactCommonProps = {
  email: string
  phoneNumber: number
  facebookURL: string
  instagramURL: string
  contactText: string
  ContactBaner: BanerProps
}

export type AboutPageProps = {
  firstTyphography: string
  restOfDescription: string
  avatar: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
  AboutBaner: BanerProps
}

export type GalleryPageProps = {
  GalleryBaner: BanerProps
}

export type PortfolioPageProps = {
  showContactButton: boolean
  latestPhotos: string
  encourageText: string
  anchorText: string
  contactButtonText: string
  PortfolioBaner: BanerProps
}

export type PricingPageProps = {
  PricingBaner: BanerProps
}
