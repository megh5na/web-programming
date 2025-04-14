import React, { useState, useEffect } from 'react';

function Joke() {
  const [joke, setJoke] = useState('');
  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(`${data.setup} ${data.punchline}`));
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
}

export default Joke;