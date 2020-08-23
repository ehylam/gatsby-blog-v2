import React from 'react';

import './Hero.scss'

import Image from '../image'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

document.querySelector('.hero').addEventListener('mousemove',heroTransition);

function heroTransition(e) {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;

  gsap.to('.hero .bg', {
    duration: 1.5,
    x: xPos * 20,
    y: yPos * 25,
    rotationY: xPos * 30,
    rotationX: yPos * 15
  })
}



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
      <div className="bg" style={{ backgroundImage: `url(${image})`}}></div>
      </div>
    </section>
   );
}

export default Hero;