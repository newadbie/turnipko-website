import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'

import classes from './header.module.css'

interface Props {
  fluidObject: FluidObject
}

const Baner: FC<Props> = ({ fluidObject }) => {
  return (
    <div className={classes.Baner}>
      <Img fluid={fluidObject} style={{ minHeight: '400px' }} />
    </div>
  )
}

export default Baner
