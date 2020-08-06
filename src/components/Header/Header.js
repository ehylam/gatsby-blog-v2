import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './Header.scss'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
}

ScrollTrigger.create({
  start: 100,
  toggleClass: {
    targets: 'body',
    className: 'scroll'
  },
  onEnter: ({direction}) => {
    console.log(direction)
  },
  onLeaveBack: ({direction}) => {
    console.log(direction);
  }

})


const Header = ({ siteTitle }) => {



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
