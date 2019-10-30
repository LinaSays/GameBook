// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Info = ({ name, avatar }) => (
  <div className="header-profile">
    <img src={avatar} alt="" className="header-profile-avatar" />
    <div className="header-profile-text-welcome">
      <h2>{name}</h2>
    </div>
  </div>
);

Info.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};


// == Export
export default Info;
