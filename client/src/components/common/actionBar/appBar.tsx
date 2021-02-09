import React, { FC } from 'react'
import { AppBar, Container, Toolbar } from '@material-ui/core'

import classes from './appBar.module.css'
import Logo from './Logo'
import Items from './Items'

const Header: FC = () => {
  return (
    <header className={classes.Wrapper}>
      <AppBar className={classes.AppBar} elevation={0}>
        <Container>
          <Toolbar className={classes.Toolbar}>
            <Logo />
            <Items />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
