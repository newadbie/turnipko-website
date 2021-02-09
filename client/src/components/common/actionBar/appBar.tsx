import React, { FC } from 'react'
import { AppBar, Container, Toolbar } from '@material-ui/core'

import './style.scss'
import Logo from './Logo'
import Items from './Items'

const Header: FC = () => {
  return (
    <header className="AppBar-wrapper">
      <AppBar className="AppBar" elevation={0}>
        <Container>
          <Toolbar className="Toolbar">
            <Logo />
            <Items />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
