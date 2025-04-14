import React from 'react';
import '../styles.css';

function Btn() {
  const inline = {
    backgroundColor: 'blue',
    padding: '10px',
    fontSize: '16px',
    color: 'white',
    border: 'none'
  };
  return (
    <div>
      <button style={inline}>Inline</button>
      <button style={{ backgroundColor: 'red', padding: '10px', fontSize: '16px', color: 'white', border: 'none' }}>
        <style jsx>{`
          button {
            background-color: red;
            padding: 10px;
            font-size: 16px;
            color: white;
            border: none;
          }
        `}</style>
        Internal
      </button>
      <button className="ext-btn">External</button>
    </div>
  );
}

export default Btn;