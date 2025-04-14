import React from 'react';

function Reverse() {
  const str = "React";
  const rev = str.split('').reverse().join('');
  const isPal = str.toLowerCase() === rev.toLowerCase();
  return (
    <p>
      Reverse of {str} is {rev}. It is {isPal ? '' : 'not '}a palindrome.
    </p>
  );
}

export default Reverse;