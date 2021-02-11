import React, { FC } from 'react'
import { PageProps, graphql } from 'gatsby'

import IndexLayout from '../layouts'
import Header from '../components/Portfolio/header'
import Latest from '../components/Portfolio/latest'
import About from '../components/Portfolio/about'
import Contact from '../components/common/contact/contact'

import { PortfolioPageProps, AboutPageProps } from '../types'

interface QueryProps {
  data: {
    strapiPortfolio: PortfolioPageProps
    strapiAbout: AboutPageProps
  }
}

const IndexPage: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  return (
    <IndexLayout>
      <Header
        headerTitle={data.strapiPortfolio.PortfolioBaner.banerText}
        headerSubTitle={data.strapiPortfolio.PortfolioBaner.banerSubText ? data.strapiPortfolio.PortfolioBaner.banerSubText : ''}
        contactButtonText={data.strapiPortfolio.contactButtonText}
        showContactButton={data.strapiPortfolio.showContactButton}
        fluidObject={data.strapiPortfolio.PortfolioBaner.backgroundImg.localFile.childImageSharp.fluid}
      />
      <Latest
        headerText={data.strapiPortfolio.latestPhotos}
        anchorText={data.strapiPortfolio.anchorText}
        encourageText={data.strapiPortfolio.encourageText}
      />
      <About typhographyText={data.strapiAbout.firstTyphography} avatarFixed={data.strapiAbout.avatar.localFile.childImageSharp.fixed} />
      <Contact />
    </IndexLayout>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query {
    strapiPortfolio {
      showContactButton
      latestPhotos
      encourageText
      anchorText
      contactButtonText
      PortfolioBaner {
        banerText
        banerSubText
        backgroundImg {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    strapiAbout {
      firstTyphography
      restOfDescription
      avatar {
        localFile {
          childImageSharp {
            fixed(width: 217, height: 217) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
