// == Import : npm
import React from 'react';


// == Import : local
import './home.scss';
import Intro from './Intro';
import Card from './Card';


// == Composant
const Home = () => (
  <main>
    <div className="home">
      <Intro />
    </div>
    <div className="content">
      <Card />
      <Card />
      <Card />
    </div>

  </main>
);

// == Export
export default Home;
