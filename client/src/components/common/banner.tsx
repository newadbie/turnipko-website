import { FC } from 'react'

import Img, { FluidObject } from 'gatsby-image'

import classes from './banner.module.css'

interface Props {
  title: string
  subTitle?: string
  fluidObject: FluidObject
}

// This banner is a component for every page different than landing page
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
