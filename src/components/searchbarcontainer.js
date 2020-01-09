import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SearchBar from "./searchbar"

import "./searchbarcontainer.scss"

const SearchbarContainer = ({ title, placeholder, onChange }) => (
  <div className="searchbar-container">
    <h1 className="searchbar-header">{ title }</h1>
    <SearchBar placeholder={ placeholder } onChange={ onChange }/>
  </div>
)

SearchbarContainer.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

SearchbarContainer.defaultProps = {
  title: ``,
  placeholder: ``,
  onChange: () => {},
}

export default SearchbarContainer
