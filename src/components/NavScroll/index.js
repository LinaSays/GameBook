// == Import : npm
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// == Import : local
import './navscroll.scss';

// == Composant
const NavScroll = ({ isConnected }) => {
  // hook to managed a local state
  const [isOpen, SeeMenu] = useState(false);

  // Remove scrollbar in DOM when bur menu is open
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    // nav fixed in scroll
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.nav-scroll').style.top = '0';
      }
      else {
        document.querySelector('.nav-scroll').style.top = '-100%';
      }
    }

    // if (isOpen) {
    //   document.body.style.overflowY = 'hidden';

    //   // if (window.innerWidth > 992) {
    //   //   document.body.style.overflowY = 'visible';
    //   // }
    // }
    // else {
    //   document.body.style.overflowY = 'visible';
    // }
  });

  // All variables who generate a classname with classNames library
  const visibleOrnot = classNames('nav-hidden', { 'nav-visible': isOpen });
  const navContainer = 'container-fluid nav-container nav-scroll';
  const openOrNot = classNames('nav-icon1', { open: isOpen });

  // Remove cookie
  const removeCookie = () => {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = '/';
  };
  return (
    <div className={navContainer}>
      {
        isConnected ? (
          <nav className="nav container">
            <div className="nav-group">
              <NavLink to="/" className="nav-logo text-dark" onClick={() => SeeMenu(!isOpen)}><span>GAMEBook</span></NavLink>
              <NavLink to="/profile" className="nav-group-link text-dark ">Mon compte</NavLink>
              <NavLink to="/concept" className="nav-group-link text-dark">Catégories</NavLink>
              <NavLink to="/team" className="nav-group-link text-dark">A propos</NavLink>
              <NavLink to="/contact" className="nav-group-link text-dark">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signin"><button type="button" className="button-group-link" onClick={removeCookie}>Se déconnecter</button></NavLink>
            </div>
            <div className={openOrNot} onClick={() => SeeMenu(!isOpen)}>
              <span className="is-open" />
              <span className="is-open" />
              <span className="is-open" />
            </div>
            <div className={visibleOrnot}>
              <NavLink to="/" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Accueil</NavLink>
              <NavLink to="/profile" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Mon compte</NavLink>
              <NavLink to="/categories" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Catégories</NavLink>
              <NavLink to="/contact" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Contact</NavLink>
              <NavLink to="/" className="nav-group-link-bis" onClick={removeCookie}>Se déconnecter</NavLink>
            </div>
          </nav>
        ) : (
          <nav className="nav container">
            <div className="nav-group">
              <NavLink to="/" className="nav-logo text-dark" onClick={() => SeeMenu(!isOpen)}><span>GAMEBook</span></NavLink>
              <NavLink to="/" className="nav-group-scroll">Accueil</NavLink>
              <NavLink to="/team" className="nav-group-scroll">La team</NavLink>
              <NavLink to="/contact" className="nav-group-scroll">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signup"><button type="button" className=" button-group-link-scroll mr-3">S'inscrire</button></NavLink>
              <NavLink to="/signin"><button type="button" className="button-group-link-scroll">Se connecter</button></NavLink>
            </div>
            <div className={openOrNot} onClick={() => SeeMenu(!isOpen)}>
              <span className="is-open" />
              <span className="is-open" />
              <span className="is-open" />
            </div>
            <div className={visibleOrnot}>
              <NavLink to="/" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>La team</NavLink>
              <NavLink to="/contact" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Contact</NavLink>
              <NavLink to="/signup" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>S'inscrire</NavLink>
              <NavLink to="/signin" className="nav-group-link-bis" onClick={() => SeeMenu(!isOpen)}>Se connecter</NavLink>
            </div>
          </nav>
        )
    }
    </div>
  );
};

// == Validation props
NavScroll.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default NavScroll;
