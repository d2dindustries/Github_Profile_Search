import { Link } from "gatsby";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import PropTypes from "prop-types";
import React from "react";
import "./searchbar.scss";

const SearchBar = ({ placeholder }) => (
  <InputGroup className="search">
    <Input className="search-bar" type="search" placeholder={ placeholder } />
    <InputGroupAddon addonType="append">
      <Button className="search-button" color="secondary">Search</Button>
    </InputGroupAddon>
  </InputGroup>
)

SearchBar.propTypes = {
  placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: ``,
}

export default SearchBar
