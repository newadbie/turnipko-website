import React, { FC } from 'react'
import { Link } from 'gatsby'

import LatestItems from './latestItems'

import { Container } from '@material-ui/core'
import classes from './latest.module.css'

interface Props {
  headerText: string
  anchorText: string
  encourageText: string
}

const Latest: FC<Props> = ({ encourageText, anchorText, headerText }) => {
  return (
    <Container className={classes.Wrapper}>
      <header className={classes.Header}>
        <h1>{headerText}</h1>
      </header>
      <LatestItems />
      <section className={classes.Section}>
        <h2>{encourageText}</h2>
        <h3>
          <Link to="/gallery">{anchorText}</Link>
        </h3>
      </section>
    </Container>
  )
}

export default Latest
