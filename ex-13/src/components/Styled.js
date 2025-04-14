import React from 'react';

function Styled() {
  const style = {
    color: 'blue',
    fontSize: '20px',
    border: '1px solid black',
    padding: '10px'
  };
  return <p style={style}>Styled Message</p>;
}

export default Styled;