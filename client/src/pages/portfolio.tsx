import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const Portfolio: FC = () => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <p>Test</p>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Portfolio
