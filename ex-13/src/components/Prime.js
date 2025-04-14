import React from 'react';

function Prime() {
  const num = 17;
  let isPrime = true;
  if (num < 2) isPrime = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) isPrime = false;
  }
  return <p>{num} is {isPrime ? 'prime' : 'not prime'}</p>;
}

export default Prime;