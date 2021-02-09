import React, { FC, createRef } from 'react'
import ContactInput from './contactInput'

const ContactForm: FC = () => {
  const nameRef = createRef<HTMLInputElement>()
  const emailRef = createRef<HTMLInputElement>()
  const messageRef = createRef<HTMLTextAreaElement>()

  return (
    <form className="Contact--form" onSubmit={e => e.preventDefault()}>
      <ContactInput ref={nameRef} type="text" labelText="Name" />
      <ContactInput ref={emailRef} type="email" labelText="Email" />
      <ContactInput ref={messageRef} type="textarea" labelText="Message" />
      <button type="submit" className="Contact--submitButton">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
