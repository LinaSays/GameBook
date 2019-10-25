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
    const { getStories, getCategory } = this.props;
    getStories();
    getCategory();
  }

  render() {
    const { isConnected, story, category } = this.props;
    return (
      <main>

        {
          isConnected ? (
            <div className="content">
              {category.map((item) => (
                <CardCategory key={item.id} {...item} />
              ))}
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
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
};

// == Export
export default Home;
