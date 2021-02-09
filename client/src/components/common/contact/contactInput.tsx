import React, { RefObject, forwardRef } from 'react'

import classes from './contact.module.css'

type Props = {
  labelText: string
  placeholder?: string
  type: 'text' | 'email' | 'textarea'
}

const ContactInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(({ labelText, placeholder, type }, ref) => {
  return (
    <div className={classes.Row}>
      <label>{labelText}</label>
      {type !== 'textarea' ? (
        <input placeholder={placeholder} type={type} ref={ref as RefObject<HTMLInputElement>} />
      ) : (
        <textarea placeholder={placeholder} ref={ref as RefObject<HTMLTextAreaElement>} />
      )}
    </div>
  )
})

export default ContactInput
