// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import Intro from './Intro';
import Card from './Card';
import CardCategory from './CardCategory';



// == Composant
const Home = ({ isConnected }) => (
  <main>

    {
      isConnected ? (
        <div className="content">
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>
      ) : (
        <>
          <div className="home">
            <Intro isConnected={isConnected} />
            <div className="wave" />
          </div>
          <div className="content">
            <Card />
            <Card />
            <Card />
          </div>
        </>
      )
    }


  </main>
);
// == Validation props
Home.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default Home;
