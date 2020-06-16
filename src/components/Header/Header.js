import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './Header.scss'

const Header = ({ siteTitle }) => (
 <header>
   <span>Hello, World - {siteTitle} </span>
 </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
