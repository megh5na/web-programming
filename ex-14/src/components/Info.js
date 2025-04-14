import React from 'react';

function Info() {
  const user = {
    name: 'Meghana Y',
    email: 'meghana@gmail.com',
    bio: 'Web developer and tech enthusiast.'
  };
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default Info;