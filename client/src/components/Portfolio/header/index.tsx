import React, { FC } from 'react'

import Baner from './baner'
import { FluidObject } from 'gatsby-image'

import { Container } from '@material-ui/core'
import SlideButton from '../../common/slideButton'

import classes from './header.module.css'

interface Props {
  fluidObject: FluidObject
  headerTitle: string
  headerSubTitle: string
  showContactButton: boolean
  contactButtonText: string
}

const Header: FC<Props> = ({ fluidObject, showContactButton, headerTitle, headerSubTitle, contactButtonText }) => {
  return (
    <header className={classes.Header}>
      <Baner fluidObject={fluidObject} />
      <Container>
        <div className={classes.ContentWrapper}>
          <div className={classes.Text}>
            <h1 className={classes.Title}>{headerTitle}</h1>
            <h2 className={classes.Subtitle}>{headerSubTitle}</h2>
          </div>
          {showContactButton ? <SlideButton text={contactButtonText} /> : null}
        </div>
      </Container>
    </header>
  )
}

export default Header
