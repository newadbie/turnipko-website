import React, { FC } from 'react'

import { Grid } from '@material-ui/core'

interface Props {
  imgSrc: string
}

const LatestItem: FC<Props> = ({ imgSrc }) => {
  return (
    <Grid item xs={10} sm={6} md={4} className="Latest--item">
      <img src={imgSrc} className="Item--img" />
    </Grid>
  )
}

export default LatestItem
