import React from 'react';

function Greet() {
  const isMorning = true;
  return <p>{isMorning ? 'Good Morning' : 'Good Evening'}</p>;
}

export default Greet;