import React, { FC } from 'react'
import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core'

import classes from './appBar.module.css'
import Logo from './Logo'
import Items from './Items'

import MenuIcon from '@material-ui/icons/Menu'

const Header: FC = () => {
  return (
    <header className={classes.Wrapper}>
      <AppBar position="fixed" className={`${classes.AppBar} ${classes.Mobile}`} elevation={0}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Logo />
          </div>
          <IconButton edge="end" style={{ color: 'black' }} aria-label="menu">
            <MenuIcon style={{ fontSize: '40px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" className={`${classes.AppBar} ${classes.Desktop}`} elevation={0}>
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
