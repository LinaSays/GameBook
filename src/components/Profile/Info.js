// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { GiBlackBook } from 'react-icons/gi';
import { Tooltip } from 'reactstrap';

// == Import : local

// == Composant
const Info = ({ name, avatar, role }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <>
      <div className="header-profile">
        <img src={avatar} alt="" className="header-profile-avatar" />
        <div className="write-story-desktop-wrapper">
          {role === 'author' && (
            <button type="button" className="write-story-desktop-wrapper-icon">
              <Link to="/createstory" id="DisabledAutoHideExample" className="link-svg"><GiBlackBook /></Link>
              <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
              Ecrire une histoire
              </Tooltip>
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
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};


// == Export
export default Info;
