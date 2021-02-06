import React, { FC } from 'react'
import { Container } from '@material-ui/core'

import Img, { FixedObject } from 'gatsby-image'

import './about.css'
import SlideButton from '../common/slideButton'

interface Props {
  typhographyText: string
  avatarFixed: FixedObject
}

const About: FC<Props> = ({ typhographyText, avatarFixed }) => {
  return (
    <section className="About">
      <Container>
        <header className="About--header">
          <h1>About me</h1>
        </header>
        <section className="About--section">
          <div className="About--text" style={{ width: '280px' }}>
            <p>{typhographyText}</p>
            <SlideButton text="Read more" className="About--button" />
          </div>
          <div className="About--imageWrapper">
            <Img fixed={avatarFixed} className="About--image" />
          </div>
        </section>
      </Container>
    </section>
  )
}

export default About
