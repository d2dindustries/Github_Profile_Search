import PropTypes from "prop-types"
import React from "react"
import { Media } from 'reactstrap';

import "./profilecontainer.scss";

const ProfileContainer = ({ visible, profile, error }) => {
	if(!visible) return null;

	const { avatar, username, followers, html_url } = profile;
	return (
		<>
			<div className="profile-container">
			    <Media>
			      <Media left href="#" className="profile-img">
			        <Media object src={ avatar } />
			      </Media>
			      <Media body className="profile-header">
			        <Media heading>
			          <a target="_blank" href={html_url}> { username } </a>
			        </Media>
			        <p>Followers: { followers ? followers.length : 0 }</p>
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