// == Import : npm
import React, { useState, useEffect, useRef } from 'react';
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

  const linkRef = useRef(null);
  const btnRef = useRef(null);
  const logoRef = useRef(null);
  const test = useRef(null);

  useEffect(() => {
    // nav fixed in scroll
    // eslint-disable-next-line no-inner-declarations
    function scrollFunction() {
      const nav = document.querySelector('.nav-container-fixed');
      const refLink = linkRef.current.childNodes;
      const refBtn = btnRef.current.childNodes;
      const refLogo = logoRef.current;
      console.log(test);

      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.backgroundColor = 'pink';
        nav.style.transition = '.5s';
        refLink.forEach((element) => element.style.color = '#000');
        refBtn.forEach((element) => element.children[0].classList.add('button-group-link-2'));
        refLogo.style.color = '#000';
      }
      else {
        nav.style.backgroundColor = 'transparent';
        refLink.forEach((element) => element.style.color = '#fff');
        refBtn.forEach((element) => element.children[0].classList.remove('button-group-link-2'));
        refLogo.style.color = '#fff';
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };

  });

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
    <div className="container-fluid nav-container-fixed">
      {
        isConnected ? (
          <nav className="nav-div container">
            <div ref={test} className="nav-group">
              <NavLink to="/" className={colorLogo} onClick={() => SeeMenu(!isOpen)}>LOGO</NavLink>
              <NavLink to="/profile" className="nav-group-link text-dark ">Mon compte</NavLink>
              <NavLink to="/concept" className="nav-group-link text-dark">Catégories</NavLink>
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
          <nav className="nav-div container">
            <div ref={linkRef} className="nav-group">
              <NavLink to="/" className={colorLogo}><span className={colorLogo}>GAMEBook</span></NavLink>
              <NavLink to="/" className="nav-logo text-white desk"><span ref={logoRef}>GAMEBook</span></NavLink>
              <NavLink to="/" className="nav-group-link">Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link">La team</NavLink>
              <NavLink to="/contact" className="nav-group-link">Contact</NavLink>
            </div>
            <div ref={btnRef} className="button-group">
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
