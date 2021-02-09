import React, { FC, createRef } from 'react'
import ContactInput from './contactInput'

import classes from './contact.module.css'

const ContactForm: FC = () => {
  const nameRef = createRef<HTMLInputElement>()
  const emailRef = createRef<HTMLInputElement>()
  const messageRef = createRef<HTMLTextAreaElement>()

  return (
    <form className={classes.Form} onSubmit={e => e.preventDefault()}>
      <ContactInput ref={nameRef} type="text" labelText="Name" />
      <ContactInput ref={emailRef} type="email" labelText="Email" />
      <ContactInput ref={messageRef} type="textarea" labelText="Message" />
      <button type="submit" className={classes.SubmitButton}>
        Submit
      </button>
    </form>
  )
}

export default ContactForm
