import React, { FC } from 'react'

import Img from 'gatsby-image'

import { PhotoService, Currencies } from '../../types'

import classes from './pricing.module.css'

interface Props {
  currency: Currencies.EURO | Currencies.PLN | Currencies.USD
}

const Service: FC<PhotoService & Props> = ({ title, price, offert, backgroundImg, currency }) => {
  return (
    <div className={classes.Service}>
      <div className={classes.CartInner}>
        <div className={classes.CartFront}>
          <div className={classes.Background}>
            <Img fixed={backgroundImg.childImageSharp.fixed} />
          </div>
          <div className={classes.Content}>
            <h1>
              {price} {currency}
            </h1>
            <p>{title}</p>
          </div>
        </div>
        <div className={classes.CartBack} dangerouslySetInnerHTML={{ __html: offert }} />
      </div>
    </div>
  )
}

export default Service
