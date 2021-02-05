import { Container } from '@material-ui/core'
import React, { FC } from 'react'

import './contact.css'
import ContactForm from './contactForm'
import Media from './media'

const Contact: FC = () => {
  return (
    <section className="Contact">
      <Container>
        <header className="Contact--header">
          <h1>Contact</h1>
        </header>
        <div className="Contact--contentWrapper">
          <div className="Contact--formWrapper">
            <ContactForm />
          </div>
          <div className="Contact--mediaWrapper">
            <Media />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
