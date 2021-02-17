import React, { FC } from 'react'
import {Link} from 'gatsby';
import { Container } from '@material-ui/core'

import Img, { FixedObject } from 'gatsby-image'

import classes from './about.module.css'
import SlideButton from '../../common/slideButton'

interface Props {
  typhographyText: string
  avatarFixed: FixedObject
}

const AboutComp: FC<Props> = ({ typhographyText, avatarFixed }) => {
  return (
    <section className={classes.About}>
      <Container>
        <header className={classes.Header}>
          <h1>About me</h1>
        </header>
        <section className={classes.Section}>
          <div className={classes.Text}>
            <p>{typhographyText}</p>
            <Link to="/about/">
              <SlideButton text="Read more" className={classes.Button} />
            </Link>
          </div>
          <div className={classes.ImageWrapper}>
            <Img fixed={avatarFixed} className={classes.Image} />
          </div>
        </section>
      </Container>
    </section>
  )
}

export default AboutComp
