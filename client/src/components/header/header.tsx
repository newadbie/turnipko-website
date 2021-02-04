import React, { FC } from 'react'

import Baner from './baner'
import { FluidObject } from 'gatsby-image'

import './header.css'
import { Container } from '@material-ui/core'
import SlideButton from '../common/slideButton'

interface Props {
  fluidObject: FluidObject
}

const Header: FC<Props> = ({ fluidObject }) => {
  return (
    <header className="Header">
      <Baner fluidObject={fluidObject} />
      <Container>
        <div className="Header-contentWrapper">
          <div className="Header--text">
            <h1 className="Header--title">Turnipko</h1>
            <h2 className="Header--subtitle">Beautiful pictures of your baby</h2>
          </div>
          <SlideButton text="Contact me" />
        </div>
      </Container>
    </header>
  )
}

export default Header
