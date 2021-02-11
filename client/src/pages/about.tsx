import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'
import AboutComp from '../components/AboutComp'

import { AboutPageProps } from '../types'

interface QueryPage {
  data: {
    strapiAbout: AboutPageProps
  }
}

const About: FC<PageProps & QueryPage> = ({ data }: QueryPage) => {
  return (
    <IndexLayout>
      <Baner title="About" fluidObject={data.strapiAbout.AboutBaner.backgroundImg.localFile.childImageSharp.fluid} />
      <AboutComp
        firstTyphography={data.strapiAbout.firstTyphography}
        avatar={data.strapiAbout.avatar.localFile.childImageSharp.fixed}
        restOfDescription={data.strapiAbout.restOfDescription}
      />
    </IndexLayout>
  )
}

export default About

export const PageQuery = graphql`
  query {
    strapiAbout {
      restOfDescription
      firstTyphography
      avatar {
        localFile {
          childImageSharp {
            fixed(width: 217, height: 217) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }

      AboutBaner {
        banerText
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
  }
`
