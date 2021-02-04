import React, { FC } from 'react'

import Img, { FluidObject } from 'gatsby-image'
import { Grid } from '@material-ui/core'

interface Props {
  fluidObject: FluidObject
}

const LatestItem: FC<Props> = ({ fluidObject }) => {
  return (
    <Grid item xs={10} sm={6} md={4} className="Latest--item">
      <Img fluid={fluidObject} style={{ height: '100%' }} />
    </Grid>
  )
}

export default LatestItem
