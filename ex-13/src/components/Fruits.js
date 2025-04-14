import React from 'react';

function Fruits() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {fruits.map((fruit, idx) => (
        <li key={idx}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Fruits;