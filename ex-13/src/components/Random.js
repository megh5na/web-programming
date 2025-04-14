import React, { useState } from 'react';

function Random() {
  const [num, setNum] = useState(null);
  const generate = () => setNum(Math.floor(Math.random() * 100) + 1);
  return (
    <div>
      <button onClick={generate}>Generate</button>
      {num && <p>Number: {num}</p>}
    </div>
  );
}

export default Random;