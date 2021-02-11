import React, { FC } from 'react'
import { Backdrop, Container, Fade, Modal } from '@material-ui/core'

import Img from 'gatsby-image'

import classes from './serviceModal.module.css'

import { Currencies, PhotoService } from '../../types'

interface Props {
  isOpen: boolean
  setOpen: (newState: boolean) => void
  photoService: PhotoService
  currency: Currencies
}

const ServiceModal: FC<Props> = ({ isOpen, setOpen, photoService, currency }) => {
  return (
    <Modal
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus
      open={isOpen}
      onClose={() => setOpen(!isOpen)}
      className={classes.Modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 350
      }}
    >
      <Fade in={isOpen} timeout={350}>
        <Container style={{ position: 'relative', outline: 'none' }}>
          <div className={classes.Background}>
            <Img fluid={photoService.backgroundImg.localFile.childImageSharp.fluid} className={classes.BackgroundImg} />
          </div>
          <div className={classes.Content}>
            <h1>
              {photoService.price} {currency}
            </h1>
            <div className={classes.Text} dangerouslySetInnerHTML={{ __html: photoService.offert }} />
          </div>
        </Container>
      </Fade>
    </Modal>
  )
}

export default ServiceModal
