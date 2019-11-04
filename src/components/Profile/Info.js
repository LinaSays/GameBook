// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { GiBlackBook } from 'react-icons/gi';

// == Import : local

// == Composant
const Info = ({ name, avatar, role }) => (
  <>
    <div className="header-profile">
      <img src={avatar} alt="" className="header-profile-avatar" />
      <div className="write-story-desktop-wrapper">
        {role === 'author' && (
          <button type="button" className="write-story-desktop-wrapper-icon">
            <Link to="/createstory"><GiBlackBook /></Link>
          </button>
        )}
      </div>
      <div className="header-profile-text-welcome">
        <h2 className="header-profile-text-welcome-name">{name}</h2>
        <Badge className="header-profile-text-welcome-role">{role}</Badge>
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
