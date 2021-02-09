import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'
import { FixedObject, FluidObject } from 'gatsby-image'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'
import AboutComp from '../components/About/about'

type QueryProps = {
  data: {
    strapiAbout: {
      restOfDescription: string
      firstTyphography: string
      avatar: {
        childImageSharp: {
          fixed: FixedObject
        }
      }
      banerImg: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const About: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  return (
    <IndexLayout>
      <Baner title="About" fluidObject={data.strapiAbout.banerImg.childImageSharp.fluid} />
      <AboutComp
        firstTyphography={data.strapiAbout.firstTyphography}
        avatar={data.strapiAbout.avatar.childImageSharp.fixed}
        restOfDescription={data.strapiAbout.restOfDescription}
      />
    </IndexLayout>
  )
}

export default About

export const PageQuery = graphql`
  query {
    strapiAbout {
      banerImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      restOfDescription
      firstTyphography
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
