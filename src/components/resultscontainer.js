import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import SearchResultsItem from "./searchresultsitem"
import SearchCounter from "./searchcounter"

import "./resultscontainer.scss";

const ResultsContainer = ({ visible, results, total, loadMore, openProfile }) => {
	if(results.length === 0 || !visible) return null;

	const searchResults = results.map((data) => <SearchResultsItem key={data.id+data} data={data} openProfile={openProfile} />);

	if(results.length !== total){
		searchResults.push(
			<ListGroupItem key={-29219291} className="search-results-list-item">
				<Button className="search-results-load-button" onClick={ loadMore }>Load More</Button>
			</ListGroupItem>
		);
	}

	return (
		<>
			<div className="search-results">
				<ListGroup className="search-results-list">
					{ searchResults }
				</ListGroup>
			</div>
		    <SearchCounter visible={visible} count={results.length} total={total} />
		</>
	);
}

ResultsContainer.propTypes = {
  visible: PropTypes.bool,
  results: PropTypes.array,
  total: PropTypes.number,
  loadMore: PropTypes.func,
}

ResultsContainer.defaultProps = {
  visible: true,
  results: [],
  total: 0,
  loadMore: () => {},
}

export default ResultsContainer