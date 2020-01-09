import PropTypes from "prop-types"
import React from "react"

import { ListGroup, ListGroupItem } from 'reactstrap';
import { Media, Button } from 'reactstrap';

import "./profilecontainer.scss";

const ProfileContainer = ({ profile }) => {
	const { avatar, username, followers } = profile;
	return (
		<div className="profile-container">
		    <Media>
		      <Media left href="#" className="profile-img">
		        <Media object src={ avatar } />
		      </Media>
		      <Media body className="profile-header">
		        <Media heading>
		          { username }
		        </Media>
		        { followers ? <p>Followers: { followers ? followers.length : 0 }</p> : null}
		        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
		      </Media>
		    </Media>
		</div>
	);
}

ProfileContainer.propTypes = {
  profile: PropTypes.object,
}

ProfileContainer.defaultProps = {
  profile: {},
}

export default ProfileContainer