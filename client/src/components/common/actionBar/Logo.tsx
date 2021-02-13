import { FC } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'

type QueryType = {
  strapiSettings: {
    logo: {
      localFile: {
        childImageSharp: {
          fixed: FixedObject
        }
      }
    }
  }
}

const Logo: FC = () => {
  const data: QueryType = useStaticQuery(graphql`
    query {
      strapiSettings {
        logo {
          localFile {
            childImageSharp {
              fixed(width: 70, height: 70) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <a href="#" style={{ margin: 0, padding: 0, display: 'block' }}>
      <Img fixed={data.strapiSettings.logo.localFile.childImageSharp.fixed} />
    </a>
  )
}

export default Logo
