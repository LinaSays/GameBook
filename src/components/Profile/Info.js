// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

// == Import : local

// == Composant
const Info = ({ name, avatar, role }) => (
  <>
    <div className="header-profile">
      <img src={avatar} alt="" className="header-profile-avatar" />
      <div className="header-profile-text-welcome">
        <h2>{name}</h2>
        <Badge className="header-profile-role">{role}</Badge>
      </div>
    </div>
    <div className="wrapper-button">
      {role === 'author' && <button type="button" className="button-createstory" variant="warning"><Link to="/createstory" className="button-createstory-text">Ecrire une histoire</Link></button>}
    </div>
  </>
);

Info.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};


// == Export
export default Info;
