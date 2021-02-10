import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import PhoneIcon from '@material-ui/icons/Phone'
import DraftsIcon from '@material-ui/icons/Drafts'

// @ts-ignore
import FacebookIcon from '../../../assets/Facebook.svg'
// @ts-ignore
import InstagramIcon from '../../../assets/Instagram.svg'

import classes from './contact.module.css'
import { ContactCommonProps } from '../../../types'

type StaticQuery = {
  strapiContact: ContactCommonProps
}

const Media: FC = () => {
  const query = graphql`
    query {
      strapiContact {
        email
        facebookURL
        instagramURL
        phoneNumber
        contactText
      }
    }
  `
  const data: StaticQuery = useStaticQuery(query)
  console.log(data)
  return (
    <>
      <p>{data.strapiContact.contactText}</p>
      <p>
        <PhoneIcon />
        &nbsp; {data.strapiContact.phoneNumber}
      </p>
      <p>
        <DraftsIcon />
        &nbsp; {data.strapiContact.email}
      </p>
      <div className={classes.Media}>
        <div>
          <a href={data.strapiContact.facebookURL}>
            <FacebookIcon />
          </a>
        </div>
        <div>
          <a href={data.strapiContact.instagramURL}>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Media
