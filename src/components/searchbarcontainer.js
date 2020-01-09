import PropTypes from "prop-types"
import React from "react"
import SearchBar from "./searchbar"

import "./searchbarcontainer.scss"

const SearchbarContainer = ({ title, placeholder, error, onChange }) => (
  <>
    <div className="searchbar-container">
      <h1 className="searchbar-header">{ title }</h1>
      <SearchBar placeholder={ placeholder } onChange={ onChange }/>
    </div>
    { error ? <p>{ error }</p> : null }
  </>
)

SearchbarContainer.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
}

SearchbarContainer.defaultProps = {
  title: ``,
  placeholder: ``,
  error: ``,
  onChange: () => {},
}

export default SearchbarContainer
