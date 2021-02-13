import React, { FC } from 'react'

import { FluidObject } from 'gatsby-image'

import Baner from './baner'

import { Container } from '@material-ui/core'
import SlideButton from '../../common/slideButton'

import scrollTo from 'gatsby-plugin-smoothscroll'

import classes from './header.module.css'

interface Props {
  fluidObject: FluidObject
  headerTitle: string
  headerSubTitle: string
  showContactButton: boolean
}

const Header: FC<Props> = ({ fluidObject, showContactButton, headerTitle, headerSubTitle }) => {
  return (
    <header className={classes.Header}>
      <Baner fluidObject={fluidObject} />
      <Container>
        <div className={classes.ContentWrapper}>
          <div className={classes.Text}>
            <h1 className={classes.Title}>{headerTitle}</h1>
            <h2 className={classes.Subtitle}>{headerSubTitle}</h2>
          </div>
          {showContactButton ? <SlideButton text="Contact me" action={() => scrollTo('#contact')} /> : null}
        </div>
      </Container>
    </header>
  )
}

export default Header
