// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Intro from './Intro';
import Card from './Card';


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
      <main id="home">

        {
          isConnected ? (
            <div className="content">
              {category.map((item) => (
                <div key={item.id} className="card-story-category container" category_id={item.id} id={`card-story${item.id}`}>
                  <img className="card-story-category-img" src={item.image} alt="" />
                  <div className="card-story-category-text-content">
                    <h2 className={`card-story-category-title cat-title-${item.id}`}>{item.name} .</h2>
                    <p className="card-story-category-descrip">{item.description}</p>
                    <Link to={`categories/${item.id}`} className={`card-story-category-link cat-link-${item.id}`}>Commencer l'histoire<MdKeyboardArrowRight /></Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="home">
                <Intro isConnected={isConnected} />
                <div className="wave" />
              </div>
              <div className="content" id="histoire">
                {story.map((item) => (
                   <div id={`card-${item.id}`} className="card-story container">
                   <img className="card-story-img" src={item.image} alt="" />
                   <div className="card-story-text-content">
                     <h2 className="card-story-title">{item.title} .</h2>
                     <p className="card-story-descrip">{item.description}</p>
                     <Link to={`story/${item.id}`} className={`card-story-link link-${item.id}`}>Commencer l'histoire <MdKeyboardArrowRight /> </Link>
                   </div>
                 </div>
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
