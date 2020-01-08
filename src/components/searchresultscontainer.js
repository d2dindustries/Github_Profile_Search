import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';

import "./searchresultscontainer.scss";

const SearchResultsContainer = ({ results }) => {
	const searchResults = results.map((item) => {
		return <ListGroupItem>item</ListGroupItem>;
	});

	return (
		<ListGroup className="search-results">
			{ searchResults }
		</ListGroup>
	);
}

export default SearchResultsContainer
