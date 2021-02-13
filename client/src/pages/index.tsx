import React, { FC } from 'react'
import { PageProps, graphql } from 'gatsby'

import IndexLayout from '../layouts'
import Header from '../components/Portfolio/header'
import Latest from '../components/Portfolio/latest'
import About from '../components/Portfolio/about'
import Contact from '../components/Portfolio/contact/contact'

import scrollTo from 'gatsby-plugin-smoothscroll'

import { PortfolioPageProps, AboutPageProps } from '../types'

interface QueryProps {
  data: {
    strapiPortfolio: PortfolioPageProps
    strapiAbout: AboutPageProps
  }
}

const IndexPage: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  if (window !== undefined && location !== undefined && location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0)
      if (location.hash === '#contact') {
        setTimeout(() => {
          {
            scrollTo(`#contact`)
          }
        }, 1)
      }
    }, 1)
  }

  return (
    <IndexLayout>
      <Header
        headerTitle={data.strapiPortfolio.PortfolioBaner.banerText}
        headerSubTitle={data.strapiPortfolio.PortfolioBaner.banerSubText ? data.strapiPortfolio.PortfolioBaner.banerSubText : ''}
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
