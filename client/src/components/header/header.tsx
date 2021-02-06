import React, { FC } from 'react'

import Baner from './baner'
import { FluidObject } from 'gatsby-image'

import './header.css'
import { Container } from '@material-ui/core'
import SlideButton from '../common/slideButton'

interface Props {
  fluidObject: FluidObject
  headerTitle: string
  headerSubTitle: string
  showContactButton: boolean
  contactButtonText: string
}

const Header: FC<Props> = ({ fluidObject, showContactButton, headerTitle, headerSubTitle, contactButtonText }) => {
  return (
    <header className="Header">
      <Baner fluidObject={fluidObject} />
      <Container>
        <div className="Header-contentWrapper">
          <div className="Header--text">
            <h1 className="Header--title">{headerTitle}</h1>
            <h2 className="Header--subtitle">{headerSubTitle}</h2>
          </div>
          {showContactButton ? <SlideButton text={contactButtonText} /> : null}
        </div>
      </Container>
    </header>
  )
}

export default Header
