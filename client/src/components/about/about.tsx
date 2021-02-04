import React, { FC } from 'react'
import { Container } from '@material-ui/core'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './about.css'
import SlideButton from '../common/slideButton'

const About: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portfolioImg.png" }) {
        childImageSharp {
          fixed(width: 217, height: 217) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <section className="About">
      <Container>
        <header className="About--header">
          <h1>About me</h1>
        </header>
        <section className="About--section">
          <div className="About--text" style={{ width: '280px' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque magna in libero cursus scelerisque. Praesent semper
              lacinia ipsum vitae semper. Donec mi lectus, aliquam aliquet tincidunt non, aliquam ac massa.{' '}
            </p>
            <SlideButton text="Read more" className="About--button" />
          </div>
          <div className="About--imageWrapper">
            <Img fixed={data.placeholderImage.childImageSharp.fixed} className="About--image" />
          </div>
        </section>
      </Container>
    </section>
  )
}

export default About
