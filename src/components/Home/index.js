// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './home.scss';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Intro from './Intro';


// == Composant
class Home extends React.Component {

  componentDidMount() {
    const { getStories, getCategory } = this.props;
    getStories();
    getCategory();
  }

  componentDidUpdate() {
    // == Animations on card
    const controller = new ScrollMagic.Controller();
    const { isConnected } = this.props;
    const card = document.querySelector('.content');

    const cardArray = card.childNodes.length;

    if (isConnected) {
      for (let i = 2; i <= cardArray; i++) {
        const tween = TweenMax.to(`#card-${i}`, 0.1, { scale: 1.08, repeat: 1, yoyo: true });
        new ScrollMagic.Scene({
          triggerElement: `#card-${i}`,
          duration: '500px',

        })
          .setTween(tween)
          // .addIndicators({ name: 'resize' }) 
          .addTo(controller);
      }
    }
    else {
      for (let i = 1; i <= cardArray; i++) {
        const tween = TweenMax.to(`#card-${i}`, 0.1, { scale: 1.08, repeat: 1, yoyo: true });

        new ScrollMagic.Scene({
          triggerElement: `#card-${i}`,
          duration: '400px',

        })
          .setTween(tween)
          // .addIndicators({ name: 'resize' })
          .addTo(controller);
      }
    }
  }

  render() {
    const { isConnected, story, category } = this.props;
    return (
      <main id="home">

        {
          isConnected ? (
            <div className="content">
              {category.map((item) => (
                <div key={item.id} className="card-story container" category_id={item.id} id={`card-${item.id}`}>
                  <img className="card-story-img" src={item.image} alt="" />
                  <div className="card-story-text-content">
                    <h2 className="card-story-title">{item.name} .</h2>
                    <p className="card-story-descrip">{item.description}</p>
                    <Link to={`categories/${item.id}`} className={`card-story-link link-cat-${item.id}`}>Commencer l'histoire<MdKeyboardArrowRight /></Link>
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
                  <div key={item.id} id={`card-${item.id}`} className="card-story container">
                    <img className="card-story-img" src={item.image} alt="" />
                    <div className="card-story-text-content">
                      <h2 className={`card-story-title title-home-${item.id}`}>{item.title} .</h2>
                      <p className="card-story-descrip">{item.description}</p>
                      <Link to={`story/${item.id}`} className={`card-story-link link-home-${item.id}`}>Commencer l'histoire <MdKeyboardArrowRight /> </Link>
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
