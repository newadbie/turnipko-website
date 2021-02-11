import { FC } from 'react'

import Img from 'gatsby-image'

import { PhotoService, Currencies } from '../../types'

import classes from './pricing.module.css'

interface Props {
  currency: Currencies.EURO | Currencies.PLN | Currencies.USD
  selectService: (newService: PhotoService) => void
}

const Service: FC<PhotoService & Props> = ({ title, price, offert, backgroundImg, currency, selectService }) => {
  const currentService: PhotoService = { title, price, offert, backgroundImg }
  return (
    <div className={classes.Service} onClick={() => selectService(currentService)}>
      <div className={classes.CartInner}>
        <div className={classes.CartFront}>
          <div className={classes.Background}>
            <Img fixed={backgroundImg.localFile.childImageSharp.fixed} className={classes.GatsbyImg} />
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
