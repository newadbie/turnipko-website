import React, { FC } from 'react'

import classes from './slideButton.module.css'

interface Props {
  text: string
  className?: string
}

const SlideButton: FC<Props> = ({ text, className }) => {
  return (
    <button className={`${classes.SlideButton} ${className}`}>
      <span>{text}</span>
    </button>
  )
}

export default SlideButton
