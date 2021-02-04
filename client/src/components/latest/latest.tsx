import { Container } from '@material-ui/core'
import React, { FC } from 'react'

import './latest.css'
import LatestItems from './latestItems'

const Latest: FC = () => {
  return (
    <Container className="Latest--wrapper">
      <header className="Latest--header">
        <h1>Latest pictures</h1>
      </header>
      <LatestItems />
      <section className="Latest--section">
        <h2>Wanna see more?</h2>
        <h3>Checkout gallery</h3>
      </section>
    </Container>
  )
}

export default Latest
