import React, { FC, useState, useEffect } from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import { Container, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'

import classes from '../appBar.module.css'
import Logo from '../Logo'

import { navItems } from '../../../../data'
import { RedirectLink } from '../../../../utils'

const MobileAppBar: FC = () => {
  const [isDrawerOpen, setDrawerState] = useState<boolean>(false)

  const resizerHandler = () => {
    if (window !== undefined) {
      if (window.screen.width >= 600) {
        setDrawerState(false)
      }
    }
  }

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', resizerHandler)
    }
  }, [])

  const list = (
    <div style={{ width: 'auto' }}>
      <List>
        {navItems.map(item => (
          <RedirectLink activeClassName={classes.active} key={item.text} to={item.to} partiallyActive={item.partiallyActive}>
            <ListItem button onClick={() => setDrawerState(false)}>
              <ListItemText primary={item.text} className={classes.MText} />
            </ListItem>
          </RedirectLink>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <AppBar position="fixed" className={`${classes.AppBar} ${classes.Mobile}`} elevation={0}>
        <Toolbar className={classes.Toolbar}>
          <Container style={{ display: 'flex' }}>
            <Logo />
            <div style={{ flexGrow: 1 }}> </div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={() => setDrawerState(!isDrawerOpen)}
              style={{ color: 'black' }}
              aria-label="menu"
            >
              <MenuIcon style={{ fontSize: '40px' }} />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.Mobile} anchor="top" open={isDrawerOpen} onClose={() => setDrawerState(!isDrawerOpen)}>
        {list}
      </Drawer>
    </>
  )
}

export default React.memo(MobileAppBar)
