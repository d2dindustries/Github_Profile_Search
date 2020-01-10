import PropTypes from "prop-types"
import React from "react"

import { ListGroupItem } from 'reactstrap';
import { Media } from 'reactstrap';

import "./searchresultsitem.scss";

const SearchResultsItem = ({ data, openProfile }) => {
	const { id, login, avatar_url } = data;    
	const newProfileObj = { profilePage: 1, profile: { info: {}, followers: [], username: login } };
	return (
		<ListGroupItem key={ id } className="search-results-item" onClick={ () => openProfile(newProfileObj) }>
			<div className="d-flex">
				<Media href="#" className="search-results-item-img">
					<Media object src={ avatar_url }/>
				</Media>
				<p className="search-results-item-tag pl-5">{ login }</p>
			</div>
		</ListGroupItem>
	);
}

SearchResultsItem.propTypes = {
  data: PropTypes.object,
  openProfile: PropTypes.func,
}

SearchResultsItem.defaultProps = {
  data: {},
  openProfile: () => {}
}

export default SearchResultsItem