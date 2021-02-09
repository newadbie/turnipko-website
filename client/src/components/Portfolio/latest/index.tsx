import { Container } from '@material-ui/core'
import React, { FC } from 'react'

import './style.scss'
import LatestItems from './latestItems'

interface Props {
  headerText: string
  anchorText: string
  encourageText: string
}

const Latest: FC<Props> = ({ encourageText, anchorText, headerText }) => {
  return (
    <Container className="Latest--wrapper">
      <header className="Latest--header">
        <h1>{headerText}</h1>
      </header>
      <LatestItems />
      <section className="Latest--section">
        <h2>{encourageText}</h2>
        <h3>{anchorText}</h3>
      </section>
    </Container>
  )
}

export default Latest
