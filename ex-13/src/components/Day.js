import React from 'react';

function Day() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[new Date().getDay()];
  return <p>Today is {day}</p>;
}

export default Day;