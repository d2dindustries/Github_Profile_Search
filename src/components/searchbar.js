import React, { useState } from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import PropTypes from "prop-types";
import "./searchbar.scss";

const SearchBar = ({ placeholder, onChange }) => {
	const [username, setUsername] = useState("");

	return (
	    <form onSubmit={ (e) => { e.preventDefault(); onChange({ username: username }); } } >
		  <InputGroup className="search">
		    <Input className="search-bar" type="search" placeholder={ placeholder } onChange={ ({ target:{value} }) => setUsername(value) }/>
		    <InputGroupAddon addonType="append">
		      <Button type="submit" className="search-button" color="secondary">Search</Button>
		    </InputGroupAddon>
		  </InputGroup>
		</form>
	);
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

SearchBar.defaultProps = {
  placeholder: ``,
  onChange: () => {},
}

export default SearchBar
