import { Container, Grid } from '@material-ui/core'
import React, { FC } from 'react'

import { PhotoService, Currencies } from '../../types'

import classes from './pricing.module.css'
import Service from './service'

interface Props {
  currency: Currencies
  services: Array<PhotoService>
  selectService: (newService: PhotoService) => void
}

const Pricing: FC<Props> = ({ services, currency, selectService }) => {
  const content = services.map((service, index) => (
    <Grid item xs={12} md={6} key={index}>
      <Service selectService={selectService} currency={currency} key={service.title} {...service} />
    </Grid>
  ))

  return (
    <Container>
      <main className={classes.Pricing}>
        <Grid container>{content}</Grid>
      </main>
    </Container>
  )
}

export default Pricing
