import React from 'react';
import './styles.scss';
import userIMG from './../../assets/images/usercat.png';

const UserProfile = (props) => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="user-img">
            <img src={userIMG} />
          </div>
        </li>
        <li>
          <span className="displayName">{displayName && displayName}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
