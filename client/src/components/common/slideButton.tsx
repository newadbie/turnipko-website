import { FC } from 'react'

import classes from './slideButton.module.css'

interface Props {
  text: string
  className?: string
  action?: () => void
}

const SlideButton: FC<Props> = ({ text, className, action }) => {
  if (action) {
    return (
      <button className={`${classes.SlideButton} ${className}`} onClick={() => action()}>
        <span>{text}</span>
      </button>
    )
  } else {
    return (
      <button className={`${classes.SlideButton} ${className}`}>
        <span>{text}</span>
      </button>
    )
  }
}

export default SlideButton
