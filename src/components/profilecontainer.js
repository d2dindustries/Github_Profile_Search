import PropTypes from "prop-types"
import React from "react"
import { Media } from 'reactstrap';

import "./profilecontainer.scss";

const ProfileContainer = ({ visible, profile, error }) => {
	if(!visible) return null;

	const { avatar, username, followers } = profile;
	return (
		<>
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
		    { error ? <p>{ error }</p> : null}
		</>
	);
}

ProfileContainer.propTypes = {
  visible: PropTypes.bool,
  profile: PropTypes.object,
  error: PropTypes.string,
}

ProfileContainer.defaultProps = {
  visible: true,
  profile: {},
  error: "",
}

export default ProfileContainer