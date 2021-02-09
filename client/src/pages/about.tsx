import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'
import { FluidObject } from 'gatsby-image'

type QueryProps = {
  data: {
    strapiAbout: {
      banerImg: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const About: FC<PageProps & QueryProps> = (data: QueryProps) => {
  return (
    <IndexLayout>
      <Baner title="About" fluidObject={data.data.strapiAbout.banerImg.childImageSharp.fluid} />
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
    }
  }
`
