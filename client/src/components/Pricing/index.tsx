import { Container } from '@material-ui/core'
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
  const servicesInRow: number = 2

  const rows = [...Array(Math.ceil(services.length / servicesInRow))]
  const serviceRows = rows.map((_, id) => services.slice(id * servicesInRow, id * servicesInRow + servicesInRow))

  const content = serviceRows.map((rowContent, id) => (
    <div key={id} className={classes.Row}>
      {rowContent.map(service => (
        <Service selectService={selectService} currency={currency} key={service.title} {...service} />
      ))}
    </div>
  ))

  return (
    <Container>
      <main className={classes.Pricing}>
        <div className={classes.Services}>{content}</div>
      </main>
    </Container>
  )
}

export default Pricing
