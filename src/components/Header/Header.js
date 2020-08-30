import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useEffect} from "react"

import './Header.scss'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  gsap.core.globals("CSSRulePlugin", CSSRulePlugin);
}


function navStagger(direction) {

  const scrolled = direction === 1;

  return gsap.to('.nav__links a',0.25, {

    stagger: 0.3,
    yPercent: () => scrolled ? 110 : 0,
    autoAlpha: () => scrolled ? 0 : 1

  })

}






const Header = ({ siteTitle }) => {


  useEffect(() => {
    ScrollTrigger.create({
      start: 10,
      // markers: true,
      toggleClass: {
        targets: 'body',
        className: 'scroll'
      },
      onEnter: ({direction}) => {
        navStagger(direction);
      },
      onLeaveBack: ({direction}) => {
        navStagger(direction);
      }

    })
  },[])


  return (
 <header className="nav wrap align-center">
  <div className="nav__logo">
  <Link to="/">
    <h4>{siteTitle}</h4>
  </Link>

  </div>
   <nav className="nav__links">
     <Link to="/">Home</Link>
     <Link to="/">Some Home</Link>
     <Link to="/">Not my home</Link>
     <Link to="/">Home Alone</Link>
   </nav>
 </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
