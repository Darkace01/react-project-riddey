import * as React from 'react';
import { mainContainer } from './app.css';
import Card from './components/Card/Index';

function App() {
  return (
    <section className={mainContainer}>
      <Card />
    </section>
  );
}

export default App;
