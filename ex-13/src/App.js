import React from 'react';
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import Styled from './components/Styled';
import Squares from './components/Squares';
import Greet from './components/Greet';
import Day from './components/Day';
import Prime from './components/Prime';
import Temp from './components/Temp';
import Reverse from './components/Reverse';
import Random from './components/Random';
import Leap from './components/Leap';
import User from './components/User';

function App() {
  return (
    <div>
      <Hello />
      <Fruits />
      <Styled />
      <Squares />
      <Greet />
      <Day />
      <Prime />
      <Temp />
      <Reverse />
      <Random />
      <Leap />
      <User firstName="Meghana" lastName="Yamajala" />
    </div>
  );
}

export default App;