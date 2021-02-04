import React, { FC } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './logo.css'

const Logo: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <p>Not found</p>
  }

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} className="Logo" />
}

export default Logo
