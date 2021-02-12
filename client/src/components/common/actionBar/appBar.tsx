import React, { FC } from 'react'

import classes from './appBar.module.css'
import DestkopAppBar from './desktop'
import MobileAppBar from './mobile'

const Header: FC = () => {
  return (
    <header className={classes.Wrapper}>
      <DestkopAppBar />
      <MobileAppBar />
    </header>
  )
}

export default Header
