import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'
import Img, { FixedObject, FluidObject } from 'gatsby-image'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'
import { Container, Grid } from '@material-ui/core'

type QueryProps = {
  data: {
    strapiAbout: {
      restOfDescription: string
      firstTyphography: string
      avatar: {
        childImageSharp: {
          fixed: FixedObject
        }
      }
      banerImg: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }
  }
}

const About: FC<PageProps & QueryProps> = ({ data }: QueryProps) => {
  return (
    <IndexLayout>
      <Baner title="About" fluidObject={data.strapiAbout.banerImg.childImageSharp.fluid} />
      <Container className="About">
        <Grid container>
          <Grid item md={6}>
            <p>{data.strapiAbout.firstTyphography}</p>
          </Grid>
          <Grid item md={6}>
            <Img fixed={data.strapiAbout.avatar.childImageSharp.fixed} />
          </Grid>
        </Grid>
      </Container>
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
      restOfDescription
      firstTyphography
      avatar {
        childImageSharp {
          fixed(width: 217, height: 217) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
