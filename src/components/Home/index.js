// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import Intro from './Intro';
import Card from './Card';
import CardCategory from './CardCategory';


// == Composant
class Home extends React.Component {
  componentDidMount() {
    const { getStories } = this.props;
    getStories();
  }

  render() {
    const { isConnected, story } = this.props;
    return (
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
                {story.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>
            </>
          )
        }
      </main>
    );
  }
}

// == Validation props
Home.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  getStories: PropTypes.func.isRequired,
  story: PropTypes.array.isRequired,
};

// == Export
export default Home;
