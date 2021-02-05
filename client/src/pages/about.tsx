import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

const About: FC<PageProps> = ({ data }: any) => {
  return (
    <IndexLayout>
      <Baner title="About" fluidObject={data.placeholderImage.childImageSharp.fluid} />
    </IndexLayout>
  )
}

export default About

export const PageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "AboutBg.png" }) {
      childImageSharp {
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
