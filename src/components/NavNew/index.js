// == Import : npm
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';
// import { toast } from 'react-toastify';

// == Import : local
import './navnew.scss';

// == Composant
const NavNew = ({ isConnected }) => {
  // hook to managed a local state
  const [isOpen, SeeMenu] = useState(false);
  const [dropDown, SeeDrop] = useState(false);

  const dropRef = useRef(null);
  const { pathname } = useLocation();
  console.log(dropDown);

  useEffect(() => {
    window.scrollTo(0, 0);
    // const drop = dropRef.current.childNodes[0].firstChild;
    // const { body } = document;
    
    // body.addEventListener('click', () => {
    //   drop.classList.remove('nav-drop-desk-open');
    // });
   
  }, [pathname]);


  // All variables who generate a classname with classNames library
  const visibleOrnot = classNames('nav-hidden', { 'nav-visible': isOpen });
  const navContainer = 'container-fluid nav-container';
  const openOrNot = classNames('nav-icon1', { open: isOpen });
  const whiteOrNot = classNames('is-close', { 'is-open': isOpen });
  const fixOrNot = classNames(navContainer, { 'container-fluid nav-container-fixed': isOpen });
  const colorLogo = classNames('nav-logo text-white mob', { 'text-dark': isOpen });
  const bgNav = classNames('', { 'nav-connect': isConnected });
  const dropOrNot = classNames('nav-drop-desk-close drop', { 'nav-drop-desk-open drop': dropDown });

  // Remove cookie
  const removeCookie = () => {
    // toast.success('A très bientôt !');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = '/';
  };
  return (
    <div className={`${fixOrNot} ${bgNav}`} ref={dropRef}>
      {
        isConnected ? (
          <nav className="nav-div  container">
            <div className={dropOrNot}>
              <NavLink to="" className="nav-drop-link">Contes</NavLink>
              <NavLink to="" className="nav-drop-link">Heroïc Fantasy</NavLink>
              <NavLink to="" className="nav-drop-link">Polar</NavLink>
              <NavLink to="" className="nav-drop-link">Science Fiction</NavLink>
              <NavLink to="" className="nav-drop-link">Horreur</NavLink>
            </div>
            <div className="nav-group">
              <NavLink to="/" className="nav-logo" onClick={() => SeeMenu(!isOpen)}>GAMEBook</NavLink>
              <NavLink to="/profile" className="nav-group-link-cat">Mon compte</NavLink>
              <NavLink to="" className="nav-group-link-cat" onClick={() => SeeDrop(!dropDown)}>
                Catégories<MdKeyboardArrowDown />
              </NavLink >
              <NavLink to="/team" className="nav-group-link-cat">A propos</NavLink>
              <NavLink to="/contact" className="nav-group-link-cat">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signin"><button type="button" className="button-group-link-cat" onClick={removeCookie}>Se déconnecter</button></NavLink>
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
              <NavLink to="/" className="nav-group-link-category" onClick={removeCookie}>Se déconnecter</NavLink>
            </div>
          </nav>
        ) : (
          <nav className="nav-div container">
            <div className="nav-group">
              <NavLink to="/" className={colorLogo}><span className={colorLogo}>GAMEBook</span></NavLink>
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
