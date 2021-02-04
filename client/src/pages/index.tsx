import React, { FC } from 'react'
import { Link, PageProps, graphql } from 'gatsby'

import IndexLayout from '../layouts'
import { Container } from '@material-ui/core'
import Header from '../components/header/header'
import Latest from '../components/latest/latest'
import About from '../components/about/about'

const IndexPage: FC<PageProps> = ({ data }: any) => {
  console.log(data)
  return (
    <IndexLayout>
      <Header fluidObject={data.placeholderImage.childImageSharp.fluid} />
      <Latest />
      <About />
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
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
