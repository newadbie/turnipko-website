import { FluidObject } from 'gatsby-image'
import React, { FC } from 'react'
import Img from 'gatsby-image'

import './banner.scss'

interface Props {
  title: string
  subTitle?: string
  fluidObject: FluidObject
}

// This banner is common banner with other pages than homepage.
const Baner: FC<Props> = ({ title, subTitle, fluidObject }) => {
  return (
    <header className="CommonBanner">
      <div className="Banner--background">
        <Img fluid={fluidObject} className="Banner--backgroundImage" />
      </div>
      <div className="Banner--content">
        <div>
          <h1>{title}</h1>
          {subTitle ? <h2>{subTitle}</h2> : null}
        </div>
      </div>
    </header>
  )
}

export default Baner
