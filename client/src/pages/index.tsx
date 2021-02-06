import React, { FC } from 'react'
import { PageProps, graphql } from 'gatsby'

import IndexLayout from '../layouts'
import Header from '../components/header/header'
import Latest from '../components/latest/latest'
import About from '../components/about/about'
import Contact from '../components/contact/contact'

const IndexPage: FC<PageProps> = ({ data }: any) => {
  return (
    <IndexLayout>
      <Header
        headerTitle={data.strapiPortfolio.BanerTitle}
        headerSubTitle={data.strapiPortfolio.BanerSubTitle}
        contactButtonText={data.strapiPortfolio.ContactButtonText}
        showContactButton={data.strapiPortfolio.ShowContactButton}
        fluidObject={data.strapiPortfolio.BanerBackground.childImageSharp.fluid}
      />
      <Latest
        headerText={data.strapiPortfolio.LatestPhotos}
        anchorText={data.strapiPortfolio.AnchorText}
        encourageText={data.strapiPortfolio.EncourageText}
      />
      <About typhographyText={data.strapiAbout.firstTyphography} avatarFixed={data.strapiAbout.avatar.childImageSharp.fixed} />
      <Contact />
    </IndexLayout>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query {
    strapiPortfolio {
      BanerTitle
      BanerSubTitle
      LatestPhotos
      EncourageText
      AnchorText
      ShowContactButton
      ContactButtonText
      BanerBackground {
        childImageSharp {
          fluid(maxHeight: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    strapiAbout {
      firstTyphography
      restOfDescription

      avatar {
        childImageSharp {
          fixed(width: 217, height: 217) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
