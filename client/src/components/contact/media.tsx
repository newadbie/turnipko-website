import React, { FC } from 'react'

import PhoneIcon from '@material-ui/icons/Phone'
import DraftsIcon from '@material-ui/icons/Drafts'

// @ts-ignore
import FacebookIcon from '../../assets/Facebook.svg'
// @ts-ignore
import InstagramIcon from '../../assets/Instagram.svg'

const Media: FC = () => {
  return (
    <>
      <p>Want to contact me directly?</p>
      <p>
        <PhoneIcon />
        &nbsp; 661101144
      </p>
      <p>
        <DraftsIcon />
        &nbsp;contact@turnipko.com
      </p>
      <div className="Media--wrapper">
        <div>
          <a href="#">
            <FacebookIcon />
          </a>
        </div>
        <div>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Media
