import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './Header.scss'

const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
