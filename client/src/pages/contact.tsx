import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'
import ContactComp from '../components/contact/contact'

const Contact: FC<PageProps> = ({ data }: any) => {
  return (
    <IndexLayout>
      <Baner title="Contact" fluidObject={data.placeholderImage.childImageSharp.fluid} />
      <ContactComp hideHeader />
    </IndexLayout>
  )
}

export default Contact

export const PageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "PenBG.png" }) {
      childImageSharp {
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
