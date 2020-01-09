import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import SearchResultsItem from "./searchresultsitem"

import "./resultscontainer.scss";

const ResultsContainer = ({ visible, results, totalUserCount, loadMore, openProfile }) => {
	if(results.length === 0 || !visible) return null;

	const searchResults = results.map((data) => <SearchResultsItem key={data.id} data={data} openProfile={openProfile} />);

	if(results.length !== totalUserCount){
		searchResults.push(
			<ListGroupItem key={-29219291} className="search-results-list-item">
				<Button className="search-results-load-button" onClick={ loadMore }>Load More</Button>
			</ListGroupItem>
		);
	}

	return (
		<div className="search-results">
			<ListGroup className="search-results-list">
				{ searchResults }
			</ListGroup>
		</div>
	);
}

ResultsContainer.propTypes = {
  visible: PropTypes.bool,
  results: PropTypes.array,
  totalUserCount: PropTypes.number,
  loadMore: PropTypes.func,
}

ResultsContainer.defaultProps = {
  visible: true,
  results: [],
  totalUserCount: 0,
  loadMore: () => {},
}

export default ResultsContainer