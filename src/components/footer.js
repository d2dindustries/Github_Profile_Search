import React from "react"
import "./footer.scss"
import { APP_SOURCE_CODE } from "../utilities/constants.js";

const Footer = () => (
  <footer className="app-footer">
    © {new Date().getFullYear()}, View the
    {` `}
    <a href="https://www.gatsbyjs.org">{ APP_SOURCE_CODE }</a>
  </footer>
)

export default Footer
 