import { Container } from '@material-ui/core'
import React, { FC } from 'react'

import classes from './contact.module.css'
import ContactForm from './contactForm'
import Media from './media'

interface Props {
  hideHeader?: boolean
}

const Contact: FC<Props> = ({ hideHeader }) => {
  return (
    <section className={classes.Contact} id="contact">
      <Container>
        {hideHeader ? null : (
          <header className={classes.Header}>
            <h1>Contact</h1>
          </header>
        )}
        <div className={classes.ContentWrapper}>
          <div className={classes.FormWrapper}>
            <ContactForm />
          </div>
          <div className={classes.MediaWrapper}>
            <Media />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
