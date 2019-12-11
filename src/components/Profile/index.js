// == Import : npm
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import Pins from './Pins';
import Info from './Info';
import Menu from './Menu';
import Change from './Change';
import Wrote from './Wrote';
import Read from './Read';
import Mobile from './Mobile';
import './profile.scss';

// == Composant
class Profile extends React.Component {
  componentDidMount() {
    const {
      getProfile, getPins, getReadStories, getWroteStories,
    } = this.props;
    getProfile();
    getPins();
    getReadStories();
    getWroteStories();
  }

  render() {
    const {
      profile,
      location,
      pins,
      read,
      wrote,
      deleteStory,
    } = this.props;
    const notpublished = wrote.filter((story) => (story.published === 0));
    const published = wrote.filter((story) => (story.published === 1));
    switch (location.pathname) {
      case '/profile/modify': {
        return (
          <div className="menu-button-modify-profile">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <Menu />
            <Change {...this.props} />
          </div>
        ); }
      case '/profile/created': {
        return (
          <div className="menu-button-stories-created">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <Menu />
            <div className="sorted-stories">
              <NavLink exact to="/profile/created" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Tout</NavLink>
              <NavLink to="/profile/created/1" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Publiés</NavLink>
              <NavLink to="/profile/created/2" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Non publiés</NavLink>
            </div>
            {wrote.map((item) => (
              <Wrote key={item.image} {...item} {...this.props} />
            ))}
          </div>
        ); }
      case '/profile/created/1': {
        return (
          <div className="menu-button-stories-created">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <Menu />
            <div className="sorted-stories">
              <NavLink exact to="/profile/created" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Tout</NavLink>
              <NavLink to="/profile/created/1" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Publiés</NavLink>
              <NavLink to="/profile/created/2" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Non publiés</NavLink>
            </div>
            {published.map((item) => (
              <Wrote key={item.image} {...item} {...this.props} />
            ))}
          </div>
        ); }
      case '/profile/created/2': {
        return (
          <div className="menu-button-stories-created">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <Menu />
            <div className="sorted-stories">
              <NavLink exact to="/profile/created" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Tout</NavLink>
              <NavLink to="/profile/created/1" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Publiés</NavLink>
              <NavLink to="/profile/created/2" className="sorted-stories-link" activeClassName="sorted-stories-link-selected">Non publiés</NavLink>
            </div>
            {notpublished.map((item) => (
              <Wrote key={item.image} {...item} {...this.props} />
            ))}
          </div>
        ); }
      case '/profile/read': {
        return (
          <div className="menu-button-stories-read">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <Menu />
            {read.map((item) => (
              <Read key={item.image} {...item} />
            ))}
          </div>
        ); }
      case '/profile/pins': {
        return (
          <div className="menu-button-pins">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <Menu />
            {pins.map((item) => (
              <Pins key={item.badge} {...item} />
            ))}
          </div>
        ); }
      default:
        return (
          <div className="profile-general-display">
            {profile.map((item) => (
              <Info key={item.id} {...item} />
            ))}
            <div className="navbar-desktop">
              <Menu />
            </div>
            <div className="navbar-mobile">
              <Mobile {...this.props} />
            </div>
          </div>
        );
    }
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  getPins: PropTypes.func.isRequired,
  pins: PropTypes.array.isRequired,
  getReadStories: PropTypes.func.isRequired,
  read: PropTypes.array.isRequired,
  getWroteStories: PropTypes.func.isRequired,
  wrote: PropTypes.array.isRequired,
};

// == Export
export default withRouter(Profile);
