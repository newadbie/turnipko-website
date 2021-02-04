import React, { FC } from 'react'

import './slideButton.css'

interface Props {
  text: string
  className?: string
}

const SlideButton: FC<Props> = ({ text, className }) => {
  return (
    <button className={`slideButton ${className}`}>
      <span>{text}</span>
    </button>
  )
}

export default SlideButton
