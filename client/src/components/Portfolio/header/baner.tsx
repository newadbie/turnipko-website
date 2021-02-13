import { FC } from 'react'
import { FluidObject } from 'gatsby-image'
import Img from 'gatsby-image/withIEPolyfill'

import classes from './header.module.css'

interface Props {
  fluidObject: FluidObject
}

const Baner: FC<Props> = ({ fluidObject }) => {
  return (
    <div className={classes.Baner}>
      <Img fluid={fluidObject} objectPosition="70% 50%" className={classes.BanerBackground} />
    </div>
  )
}

export default Baner
