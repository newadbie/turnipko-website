import React, { FC } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './logo.css'

const Logo: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <p>Not found</p>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="Logo" />
}

export default Logo
