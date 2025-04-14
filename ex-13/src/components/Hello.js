import React from 'react';

function Hello() {
  const msg = "Hello, React!";
  return (
    <div>
      {React.createElement('h1', null, 'Hello, React!')}
      <h1>{msg}</h1>
    </div>
  );
}

export default Hello;