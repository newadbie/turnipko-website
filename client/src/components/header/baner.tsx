import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'

interface Props {
  fluidObject: FluidObject
}

const Baner: FC<Props> = ({ fluidObject }) => {
  return (
    <div className="Baner">
      <Img fluid={fluidObject} />
    </div>
  )
}

export default Baner
