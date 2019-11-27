// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
import { MdHome, MdBook, MdPerson } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


// == Import : local
import './startstory.scss';

// == Composant
class StartStory extends React.Component {
  componentDidMount() {
    const { getStartStories, getProfile } = this.props;
    getStartStories();
    getProfile();
  }

  handleClick = (id) => () => {
    const { getNextChapter } = this.props;
    getNextChapter(id);
  }

  render() {
    const {
      id, text, color, image, choice, isConnected, profile,
    } = this.props;

    return (
      <div className="container-story" style={{ background: color }}>
        <Image src={image} alt="" className="bg-image" />
        <div className="story">
          {
             isConnected && (
               profile.map((item) => (
                 <div className="story-account">
                   <Image
                     key={item.avatar}
                     src={item.avatar}
                     className="story-account-img"
                   />
                   <div className="story-account-info">
                     <p className="story-account-name">{item.name}</p>
                     <div className="story-account-nav">
                       <NavLink to="/profile" className=" story-account-nav-side d-flex justify-content-center align-items-center" variant="light mt-1"><FaUser className="mr-2" /> Mon profil</NavLink>
                       <NavLink to="" className=" story-account-nav-side d-flex justify-content-center align-items-center" variant="light mt-1"><MdBook className="mr-1" /> Sauvegarder</NavLink>
                       <NavLink to="/" className=" story-account-nav-side d-flex justify-content-center align-items-center" variant="light mt-1"><MdHome className="mr-1" /> Retour à l'accueil</NavLink>
                     </div>
                   </div>
                 </div>
               ))
             )
          }
          <div className="story-page">
            <div className="story-text">
              {text}
            </div>
            <div className="story-choice">
              {choice.map((item) => (
                <button type="submit" onClick={this.handleClick(item.id_situation_child)} id={item.id_situation_child} className="story-choice-link" variant="secondary" key={item.text}>{item.text}</button>
              ))}
            </div>
            <div className="story-account-nav-mobile mt-4">
              <NavLink to="/profile" className="d-flex justify-content-center align-items-center " variant="primary mt-1"><MdPerson className="mr-1" />Mon profil</NavLink>
              <NavLink to="" className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdBook className="mr-1" /> Sauvegarder</NavLink>
              <NavLink to="/" className="d-flex justify-content-center align-items-center" variant="primary mt-1"><MdHome className="mr-1" /> Retour à l'accueil</NavLink>
            </div>
            {
              isConnected && (
              <div className="story-account-nav-footer ">
                <NavLink to="/profile" className="button-nav-footer d-flex justify-content-center align-items-center" variant="secondary"><MdPerson className="button-nav-logo"/></NavLink>
                <NavLink to="" className="button-nav-footer d-flex justify-content-center align-items-center" variant="secondary"><MdBook className="button-nav-logo"/></NavLink>
                <NavLink to="" className="button-nav-footer d-flex justify-content-center align-items-center" variant="secondary"><MdHome className="button-nav-logo"/></NavLink>
              </div>
              )


            }
          </div>
        </div>
      </div>
    );
  }
}

StartStory.propTypes = {
  id: PropTypes.number.isRequired,
  getStartStories: PropTypes.func.isRequired,
  getNextChapter: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string,
  choice: PropTypes.array.isRequired,
  isConnected: PropTypes.bool.isRequired,
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.array.isRequired,
};

StartStory.defaultProps = {
  image: '',
};

// == Export
export default StartStory;
