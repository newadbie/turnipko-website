import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'

import { FluidObject } from 'gatsby-image'
import Helmet from 'react-helmet'
import { Container, Typography } from '@material-ui/core'
import SlideButton from '../components/common/slideButton'

interface QueryProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        keywords: string
      }
    }
    strapiPortfolio: {
      PortfolioBaner: {
        backgroundImg: {
          localFile: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      }
    }
  }
}

const NotFoundPage: FC<QueryProps> = ({ data }) => {
  return (
    <div style={{ color: '#FFF', textShadow: '3px 3px 3px rgba(0,0,0,.4)', backgroundColor: 'rgba(240, 216, 230, 0.75)' }}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h1">404 Page not found :/</Typography>
        <div style={{marginTop: '30px'}}>
          <Link to="/">
            <SlideButton text="Go back" size="32px"/>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default NotFoundPage

export const PageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    strapiPortfolio {
      PortfolioBaner {
        backgroundImg {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
