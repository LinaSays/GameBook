// == Import : npm
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './navigation.scss';

// == Composant
const Navigation = ({ isConnected }) => (
  <Navbar bg="transparent" expand="lg" className="navtest">
    <Navbar.Brand href="/">
      <img
        src="https://ctl.s6img.com/society6/img/5_toqraxaqp6VSlGLQawOADlSGc/w_700/comforters/swatch/~artwork,fw_6005,fh_6001,fx_369,fy_646,iw_5571,ih_4730/s6-original-art-uploads/society6/uploads/misc/bd29582e24d74a26be4aa2e8a1e39008/~~/marmot987068-comforters.jpg"
        width="70"
        height="70"
        className="d-inline-block align-top"
        alt="cypok"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {isConnected ? (
        <Nav className="ml-auto">
          <NavLink to="/profile" className="nav" activeClassName="nav-selected">Mon compte</NavLink>
          <NavLink to="/categories" className="nav" activeClassName="nav-selected">Catégories</NavLink>
          <NavLink to="/about" className="nav" activeClassName="nav-selected">A propos</NavLink>
          <NavLink to="/contact" className="nav" activeClassName="nav-selected">Contact</NavLink>
          <Nav className="ml-5" />
          <NavLink to="/signout" className="nav" activeClassName="nav-selected">Déconnexion</NavLink>
        </Nav>
      )
        : (
          <Nav className="ml-auto">
            <NavLink exact to="/" className="nav-disco" activeClassName="nav-selected">Accueil</NavLink>
            <NavLink to="/concept" className="nav-disco" activeClassName="nav-selected">Concept</NavLink>
            <NavLink to="/contact" className="nav-disco" activeClassName="nav-selected">Contact</NavLink>
            <Nav className="ml-5" />
            <NavLink to="/signup" className="nav-disco" activeClassName="nav-selected">Inscription</NavLink>
            <NavLink to="/signin" className="nav-disco" activeClassName="nav-selected">Connexion</NavLink>
          </Nav>
        )}
    </Navbar.Collapse>
  </Navbar>
);

Navigation.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default Navigation;
