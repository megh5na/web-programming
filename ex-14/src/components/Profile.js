import React from 'react';
import Pic from './Pic';
import Info from './Info';
import Posts from './Posts';

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <Pic />
      <Info />
      <Posts />
    </div>
  );
}

export default Profile;