import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';
import { Col, Row, Media, Button } from 'reactstrap';

import "./searchresultscontainer.scss";

const SearchResultsContainer = ({ results, loadMore }) => {
	const searchResults = results.map(({ id, login, avatar_url }) => {
		return (
			<ListGroupItem key={ id } className="search-results-list-item">
				<div className="d-flex">
					<Media href="#" className="search-results-list-item-img">
						<Media object src={ avatar_url }/>
					</Media>
					<p className="search-results-list-item-tag pl-5">{ login }</p>
				</div>
			</ListGroupItem>
		);
	});
	searchResults.push(
		<ListGroupItem key={-29219291} className="search-results-list-item">
			<Button className="search-results-load-button" onClick={ loadMore }>Load More</Button>
		</ListGroupItem>
	);

	return (
		<div className="search-results">
			<ListGroup className="search-results-list">
				{ searchResults }
			</ListGroup>
		</div>
	);
}

export default SearchResultsContainer