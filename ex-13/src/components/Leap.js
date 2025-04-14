import React from 'react';

function Leap() {
  const year = 2024;
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeap ? '' : 'not '}a leap year</p>;
}

export default Leap;