import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SearchBar from "./searchbar"

import "./searchbarcontainer.scss"

const SearchbarContainer = () => (
  <div>
    <h1 className="search-header">Github Profile Search</h1>
    <SearchBar placeholder="Enter a Github Username"/>
  </div>
)

export default SearchbarContainer
