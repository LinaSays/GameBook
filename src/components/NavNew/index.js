
// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';

// == Import : local
import './navnew.scss';
import Burger from 'src/components/BurgerMenu';


// == Composant
const NavNew = ({
  isOpen, MenuView, isConnected, LinkClic, Link,
}) => {
//   const SeeMenu = (e) => MenuView(e);
//   const clickLink = (e) => LinkClic(e);

  //   const visibleOrnot = classNames('nav-hidden', { 'nav-visible': isOpen });
  const navContainer = 'container-fluid nav-container';
  //   const fixOrNot = classNames(navContainer, { 'container-fluid nav-container-fixed': isOpen });
  //   const stickyOrNOt = classNames('nav container', { 'nav container': Link !== 'accueil' });
  //   const colorLogo = classNames('text-white', { 'text-dark': isOpen });

  const removeCookie = () => {
    // toast.success('A très bientôt !');
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = '/';
  };
  return (
    <div className={navContainer}>
      {
        isConnected ? (
          <nav className="nav container">
            <div className="nav-group">
              <NavLink to="/accueil" className="text-dark">LOGO</NavLink>
              <NavLink to="/profile" className="nav-group-link text-dark font-weight-bold">Mon compte</NavLink>
              <NavLink to="/concept" className="nav-group-link text-dark font-weight-bold">Catégories</NavLink>
              <NavLink to="/team" className="nav-group-link text-dark font-weight-bold">A propos</NavLink>
              <NavLink to="/contact" className="nav-group-link text-dark font-weight-bold">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signin"><button type="button" onClick={removeCookie}>Se déconnecter</button></NavLink>
            </div>

            <Burger isOpen={isOpen} />
            {/* <div className={visibleOrnot}>
              <NavLink to="/" className="nav-group-link-bis" >Accueil</NavLink>
              <NavLink to="/concept" className="nav-group-link-bis" >Mon compte</NavLink>
              <NavLink to="/team" className="nav-group-link-bis" >Catégories</NavLink>
              <NavLink to="/signup" className="nav-group-link-bis" >Contact</NavLink>
              <NavLink to="/signin" className="nav-group-link-bis" >Se déconnecter</NavLink>
            </div> */}
          </nav>

        ) : (


          <nav className="nav container">
            <div className="nav-group">
              <NavLink to="/" className="nav-logo" name="accueil"><span>GAMEBook</span></NavLink>
              <NavLink to="/" className="nav-group-link" name="accueil">Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link" name="team">La team</NavLink>
              <NavLink to="/contact" className="nav-group-link" name="contact">Contact</NavLink>
            </div>
            <div className="button-group">
              <NavLink to="/signup"><button type="button" className=" button-group-link mr-3">S'inscrire</button></NavLink>
              <NavLink to="/signin"><button type="button" className="button-group-link">Se connecter</button></NavLink>
            </div>
            <Burger isOpen={isOpen} />
            {/* <div className={visibleOrnot}>
              <NavLink to="/" className="nav-group-link-bis" name="accueil" >Accueil</NavLink>
              <NavLink to="/team" className="nav-group-link-bis" name="team" >La team</NavLink>
              <NavLink to="/contact" className="nav-group-link-bis" name="contact" >Contact</NavLink>
              <NavLink to="/signup" className="nav-group-link-bis" >S'inscrire</NavLink>
              <NavLink to="/signin" className="nav-group-link-bis" >Se connecter</NavLink>
            </div> */}
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
