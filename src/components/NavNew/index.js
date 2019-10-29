// == Import : npm
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';

// == Import : local
import './navnew.scss';

// == Composant
const NavNew = ({ isConnected }) => {

  // hook to managed a local state
  const [isOpen, SeeMenu] = useState(false);

  // All variables who generate a classname with classNames library
  const visibleOrnot = classNames('nav-hidden', { 'nav-visible': isOpen });
  const navContainer = 'container-fluid nav-container';
  const openOrNot = classNames('nav-icon1', { open: isOpen });
  const whiteOrNot = classNames('is-close', { 'is-open': isOpen });
  const fixOrNot = classNames(navContainer, { 'container-fluid nav-container-fixed': isOpen });
  const colorLogo = classNames('nav-logo text-white mob', { 'text-dark': isOpen });

  // Remove cookie
  const removeCookie = () => {
    // toast.success('A très bientôt !');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = '/';
  };
  return (
    <div className={fixOrNot}>
      {
        isConnected ? (
          <nav className="nav container">
            <div className="nav-group">
              <NavLink to="/" className={colorLogo} onClick={() => SeeMenu(!isOpen)}>LOGO</NavLink>
              <NavLink to="/profile" className="nav-group-link text-dark ">Mon compte</NavLink>
              <NavLink to="/categories" className="nav-group-link text-dark">Catégories</NavLink>
              <NavLink to="/team" className="nav-group-link text-dark">A propos</NavLink>
              <NavLink to="/contact" className="nav-group-link text-dark">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signin"><button type="button" className="button-group-link" onClick={removeCookie}>Se déconnecter</button></NavLink>
            </div>
            <div className={openOrNot} onClick={() => SeeMenu(!isOpen)}>
              <span className={whiteOrNot} />
              <span className={whiteOrNot} />
              <span className={whiteOrNot} />
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
              <NavLink to="/" className={colorLogo} onClick={() => SeeMenu(!isOpen)}><span>GAMEBook</span></NavLink>
              <NavLink to="/" className="nav-logo text-white desk"><span>GAMEBook</span></NavLink>
              <NavLink to="/" className="nav-group-link">Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link">La team</NavLink>
              <NavLink to="/contact" className="nav-group-link">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signup"><button type="button" className=" button-group-link mr-3">S'inscrire</button></NavLink>
              <NavLink to="/signin"><button type="button" className="button-group-link">Se connecter</button></NavLink>
            </div>
            <div className={openOrNot} onClick={() => SeeMenu(!isOpen)}>
              <span className={whiteOrNot} />
              <span className={whiteOrNot} />
              <span className={whiteOrNot} />
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
NavNew.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default NavNew;
