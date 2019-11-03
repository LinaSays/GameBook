// == Import : npm
import React from 'react';
import { withRouter } from 'react-router-dom';
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
    const { getProfile, getPins, getReadStories, getWroteStories } = this.props;
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
    } = this.props;
    // const { path, url } = this.props.match;
    switch (location.pathname) {
      case '/profile/created': {
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
            {wrote.map((item) => (
              <Wrote key={item.image} {...item} />
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
