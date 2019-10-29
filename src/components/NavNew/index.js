
// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// == Import : local
import '.\navnew.scss';
import Burger from 'src/components/Burger';


// == Composant
const NavNew = ({
  isOpen, MenuView, isConnected, LinkClic, Link,
}) => {
//   const SeeMenu = (e) => MenuView(e);
//   const clickLink = (e) => LinkClic(e);

//   const visibleOrnot = classNames('nav-hidden', { 'nav-visible': isOpen });
//   const navContainer = 'container-fluid nav-container';
//   const fixOrNot = classNames(navContainer, { 'container-fluid nav-container-fixed': isOpen });
//   const stickyOrNOt = classNames('nav container', { 'nav container': Link !== 'accueil' });
//   const colorLogo = classNames('text-white', { 'text-dark': isOpen });
  return (
    <div className={fixOrNot}>
      {
        isConnected ? (
          <nav className="nav container">
            <div className="nav-group">
              <NavLink to="/accueil" className='text-dark'>LOGO</NavLink>
              <NavLink to="/profile" className="nav-group-link text-dark font-weight-bold">Mon compte</NavLink>
              <NavLink to="/concept" className="nav-group-link text-dark font-weight-bold">Catégories</NavLink>
              <NavLink to="/team" className="nav-group-link text-dark font-weight-bold">A propos</NavLink>
              <NavLink to="/contact" className="nav-group-link text-dark font-weight-bold">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signin"><button type="button">Se déconnecter</button></NavLink>
            </div>

            <Burger isOpen={isOpen} SeeMenu={SeeMenu} />
            <div className={visibleOrnot}>
              <NavLink to="/" className="nav-group-link-bis" onClick={SeeMenu}>Accueil</NavLink>
              <NavLink to="/concept" className="nav-group-link-bis" onClick={SeeMenu}>Mon compte</NavLink>
              <NavLink to="/team" className="nav-group-link-bis" onClick={SeeMenu}>Catégories</NavLink>
              <NavLink to="/signup" className="nav-group-link-bis" onClick={SeeMenu}>Contact</NavLink>
              <NavLink to="/signin" className="nav-group-link-bis" onClick={SeeMenu}>Se déconnecter</NavLink>
            </div>
          </nav>

        ) : (


          <nav className={stickyOrNOt}>
            <div className="nav-group">
              <NavLink to="/" className="nav-logo" name="accueil" onClick={clickLink}><span className={colorLogo}>LOGO</span></NavLink>
              <NavLink to="/" className="nav-group-link" name="accueil" onClick={clickLink}>Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link" name="team" onClick={clickLink}>La team</NavLink>
              <NavLink to="/contact" className="nav-group-link" name="contact" onClick={clickLink}>Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signup"><button type="button" className=" button-group-link mr-3">S'inscrire</button></NavLink>
              <NavLink to="/signin"><button type="button" className="button-group-link">Se connecter</button></NavLink>
            </div>
            <Burger isOpen={isOpen} SeeMenu={SeeMenu} />
            <div className={visibleOrnot}>
              <NavLink to="/" className="nav-group-link-bis" name="accueil" onClick={SeeMenu}>Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link-bis" name="team" onClick={SeeMenu}>La team</NavLink>
              <NavLink to="/contact" className="nav-group-link-bis" name="contact" onClick={SeeMenu}>Contact</NavLink>
              <NavLink to="/signup" className="nav-group-link-bis" onClick={SeeMenu}>S'inscrire</NavLink>
              <NavLink to="/signin" className="nav-group-link-bis" onClick={SeeMenu}>Se connecter</NavLink>
            </div>
          </nav>
        )
    }
    </div>
  );
};

// == Validation props
// NavNew.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   MenuView: PropTypes.func.isRequired,
//   isConnected: PropTypes.bool.isRequired,
// };

// == Export
export default NavNew;