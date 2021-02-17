import { FC } from 'react'

import classes from './slideButton.module.css'

interface Props {
  text: string
  className?: string
  action?: () => void
  size?: string
}

const SlideButton: FC<Props> = ({ text, className, action, size }) => {
  return (
    <button className={`${classes.SlideButton} ${className}`} onClick={action ? () => action() : undefined}>
      <span style={size ? { fontSize: size } : { fontSize: '16px' }}>{text}</span>
    </button>
  )
}

export default SlideButton
