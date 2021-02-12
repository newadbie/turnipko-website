import { FixedObject, FluidObject } from 'gatsby-image'

export type BanerProps = {
  banerText: string
  banerSubText?: string
  backgroundImg: {
    localFile: {
      childImageSharp: {
        fluid: FluidObject
      }
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
    localFile: {
      childImageSharp: {
        fixed: FixedObject
      }
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

export enum Currencies {
  USD = 'USD',
  EURO = 'EURO',
  PLN = 'PLN'
}

export type PhotoService = {
  title: string
  price: number
  offert: string
  backgroundImg: {
    localFile: {
      childImageSharp: {
        fixed: FixedObject
        fluid: FluidObject
      }
    }
  }
}

export type PricingPageProps = {
  currency: Currencies
  Services: Array<PhotoService>
  PricingBaner: BanerProps
}

export type NavItem = {
  text: string,
  to: string,
}
