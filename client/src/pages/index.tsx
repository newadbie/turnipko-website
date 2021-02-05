import React, { FC } from 'react'
import { PageProps, graphql } from 'gatsby'

import IndexLayout from '../layouts'
import Header from '../components/header/header'
import Latest from '../components/latest/latest'
import About from '../components/about/about'
import Contact from '../components/contact/contact'

const IndexPage: FC<PageProps> = ({ data }: any) => {
  console.log(data)
  return (
    <IndexLayout>
      <Header fluidObject={data.placeholderImage.childImageSharp.fluid} />
      <Latest />
      <About />
      <Contact />
    </IndexLayout>
  )
}

export default IndexPage

export const PageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "headerbg.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
