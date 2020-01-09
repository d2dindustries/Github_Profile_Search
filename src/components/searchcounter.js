import PropTypes from "prop-types"
import React from "react"

import "./searchcounter.scss";

const SearchCounter = ({ visible, count, total }) => {
	if(total === 0 || !visible) return null;
	return (
		<p className="search-counter">
			Showing { count }/{ total } Results
		</p>
	);
}

SearchCounter.propTypes = {
  visible: PropTypes.bool,
  count: PropTypes.number,
  total: PropTypes.number,
}

SearchCounter.defaultProps = {
  visible: true,
  count: 0,
  total: 0
}

export default SearchCounter