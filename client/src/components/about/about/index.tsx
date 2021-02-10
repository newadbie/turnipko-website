import React, { FC } from 'react'

import { Container } from '@material-ui/core'
import Img, { FixedObject } from 'gatsby-image'

import classes from './about.module.css'

interface Props {
  firstTyphography: string
  restOfDescription: string
  avatar: FixedObject
}

const About: FC<Props> = ({ firstTyphography, restOfDescription, avatar }) => {
  return (
    <Container className={classes.About}>
      <div className={classes.Wrapper}>
        <div className={classes.FirstRow}>
          <div className={classes.Text}>
            <p>{firstTyphography}</p>
          </div>
          <div className={classes.Avatar}>
            <Img fixed={avatar} />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: restOfDescription }} />
      </div>
    </Container>
  )
}

export default About
