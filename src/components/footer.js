import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"
import * as constants from "../utilities/constants.js";

const Footer = () => (
  <footer className="app-footer">
    © {new Date().getFullYear()}, Built for the
    {` `}
    <a href="https://www.gatsbyjs.org">{ constants.APP_NAME }</a>
  </footer>
)

export default Footer
 