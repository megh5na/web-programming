import React, { useState } from 'react';

function Main() {
  const [joke, setJoke] = useState('');
  const getJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(`${data.setup} ${data.punchline}`));
  };
  return (
    <div>
      <button onClick={getJoke}>Get Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default Main;