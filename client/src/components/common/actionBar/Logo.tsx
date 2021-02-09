import React, { FC } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import classes from './logo.module.css'

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

  return (
    <a href="#" style={{ margin: 0, padding: 0, display: 'block' }}>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} className={classes.Logo} />
    </a>
  )
}

export default Logo
