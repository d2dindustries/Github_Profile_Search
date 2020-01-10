import React from "react"
import "./footer.scss"
import { APP_SOURCE_CODE, APP_SOURCE_CODE_URL } from "../utilities/constants.js";

const Footer = () => (
  <footer className="app-footer">
    © {new Date().getFullYear()}, View the
    {` `}
    <a target="_blank" href={ APP_SOURCE_CODE_URL }>{ APP_SOURCE_CODE }</a>
  </footer>
)

export default Footer
 