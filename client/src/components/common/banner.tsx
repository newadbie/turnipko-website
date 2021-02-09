import { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import Img from 'gatsby-image'

import classes from './banner.module.css'

interface Props {
  title: string
  subTitle?: string
  fluidObject: FluidObject
}

// This banner is common banner with other pages than homepage.
const Baner: FC<Props> = ({ title, subTitle, fluidObject }) => {
  return (
    <header className={classes.CommonBanner}>
      <div className={classes.Background}>
        <Img fluid={fluidObject} className={classes.BackgroundImage} />
      </div>
      <div className={classes.Content}>
        <div>
          <h1>{title}</h1>
          {subTitle ? <h2>{subTitle}</h2> : null}
        </div>
      </div>
    </header>
  )
}

export default Baner
