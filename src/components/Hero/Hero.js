import React from 'react';

import './Hero.scss'

import Image from '../image'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'


const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      HeroImage: file(relativePath: { eq: "vender.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image  = data.HeroImage.childImageSharp.fluid.src;
  console.log(image);
  return (
    <section className="hero">
      <div className="hero__wrapper wrap">
        <div className="hero__wrapper--left">
        <h1>Hello, World</h1>
        </div>
        <div className="hero__wrapper--right">
          <div className="bg" style={{ backgroundImage: `url(${image})`}}></div>
        </div>
      </div>
    </section>
   );
}

export default Hero;