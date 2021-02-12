import { AppBar, Container, Toolbar } from '@material-ui/core'
import React, { FC } from 'react'
import Logo from '../Logo'

import classes from '../appBar.module.css'
import Items from './Items'

const DestkopAppBar: FC = () => {
  return (
    <AppBar position="fixed" className={`${classes.AppBar} ${classes.Desktop}`} elevation={0}>
      <Container>
        <Toolbar className={classes.Toolbar}>
          <Logo />
          <Items />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default DestkopAppBar
