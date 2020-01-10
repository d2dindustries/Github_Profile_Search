import PropTypes from "prop-types"
import React from "react"
import { Media } from 'reactstrap';

import "./profilecontainer.scss";

const ProfileContainer = ({ visible, profile, error }) => {
	if(!visible) return null;

	// const { avatar, username, followers, html_url } = profile;

	const { info, username } = profile;
	const { name, html_url, avatar_url, company, blog, location, email, bio, follower_count, following_count } = info;
	return (
		<>
			<div className="profile-container">
			    <Media>
			      <Media left className="profile-img">
			        <Media object src={ avatar_url } />
			      </Media>
			      <Media body className="profile-header">
			        <Media heading>
			          <p>{ name }</p>
			          <a target="_blank" href={html_url}> { username } </a>
			          { location ? <p>{ location }</p> : null }
			        </Media>
			        { blog ? <p>Blog: <a target="_blank" href={blog}> { blog } </a></p> : null }
			        { email ? <p>Email: { email }</p> : null }
			        { company ? <p>Company: { company }</p> : null }
			        { follower_count != undefined ? <p>Followers: { follower_count }</p> : null }
			        { following_count != undefined ? <p>Following: { following_count }</p> : null }
			      </Media>
			    </Media>
			    <p className="p-2">
			    	{ bio }
			    </p>
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