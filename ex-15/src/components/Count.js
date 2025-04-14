import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

function Count() {
  const [state, setState] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>useState: {state}</p>
      <button onClick={() => setState(state + 1)}>Increase</button>
      <button onClick={() => setState(state - 1)}>Decrease</button>
      <p>useReducer: {count}</p>
      <button onClick={() => dispatch({ type: 'INC' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>Decrease</button>
    </div>
  );
}

export default Count;