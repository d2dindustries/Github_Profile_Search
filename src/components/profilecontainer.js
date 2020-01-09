import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';
import { Media, Button } from 'reactstrap';

import "./profilecontainer.scss";

const ProfileContainer = ({ results }) => {
	return (
		<div className="profile-container">
		    <Media>
		      <Media left href="#">
		        <Media object src="holder.js/64x64" />
		      </Media>
		      <Media body>
		        <Media heading>
		          Media heading
		        </Media>
		        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
		      </Media>
		    </Media>
		</div>
	);
}

ProfileContainer.propTypes = {
  results: PropTypes.array,
}

ProfileContainer.defaultProps = {
  results: [],
}

export default ProfileContainer