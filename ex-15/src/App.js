import React from 'react';
import Head from './components/Head';
import Main from './components/Main';
import Foot from './components/Foot';
import Btn from './components/Btn';
import Life from './components/Life';
import Parent from './components/Parent';
import Count from './components/Count';
import Joke from './components/Joke';
import Focus from './components/Focus';
import Theme from './components/Theme';
import FormState from './components/FormState';
import FormRef from './components/FormRef';

function App() {
  return (
    <div>
      <Head title="My App" />
      <Main />
      <Foot />
      <Btn />
      <Life />
      <Parent />
      <Count />
      <Joke />
      <Focus />
      <Theme />
      <FormState />
      <FormRef />
    </div>
  );
}

export default App;