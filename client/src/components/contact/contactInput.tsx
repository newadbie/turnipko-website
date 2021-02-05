import React, { FC, RefObject } from 'react'

interface Props {
  labelText: string
  placeholder?: string
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement>
  type: 'text' | 'email' | 'textarea'
}

const ContactInput: FC<Props> = ({ labelText, placeholder, ref, type }) => {
  return (
    <div className="Form--row">
      <label>{labelText}</label>
      {type !== 'textarea' ? (
        <input placeholder={placeholder} type={type} ref={ref as RefObject<HTMLInputElement>} />
      ) : (
        <textarea placeholder={placeholder} ref={ref as RefObject<HTMLTextAreaElement>} />
      )}
    </div>
  )
}

export default ContactInput
