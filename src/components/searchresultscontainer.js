import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';

import "./searchresultscontainer.scss";

const SearchResultsContainer = ({ results }) => {
	const searchResults = results.map(({ id, login }) => {
		return (
			<ListGroupItem key={ id } className="search-results-item">
				{ login }
			</ListGroupItem>
		);
	});

	return (
		<ListGroup className="search-results">
			{ searchResults }
		</ListGroup>
	);
}

export default SearchResultsContainer
