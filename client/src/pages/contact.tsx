import React, { FC } from 'react'

import { PageProps, graphql } from 'gatsby'

import Baner from '../components/common/banner'
import IndexLayout from '../layouts'

import ContactComp from '../components/common/contact/contact'

import { ContactCommonProps } from '../types'

type QueryPage = {
  data: {
    strapiContact: ContactCommonProps
  }
}

const Contact: FC<PageProps & QueryPage> = ({ data }: QueryPage) => {
  return (
    <IndexLayout>
      <Baner
        title={data.strapiContact.ContactBaner.banerText}
        fluidObject={data.strapiContact.ContactBaner.backgroundImg.localFile.childImageSharp.fluid}
      />
      {/* @ts-ignore */}
      <ContactComp hideHeader media={data.contactInfo} />
    </IndexLayout>
  )
}

export default Contact

export const PageQuery = graphql`
  query {
    strapiContact {
      facebookURL
      instagramURL
      phoneNumber
      email
      contactText

      ContactBaner {
        banerText
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
