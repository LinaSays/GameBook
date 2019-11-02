// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

// == Import : local

// == Composant
const Menu = () => (
  <Nav className="flex-column-menu-desktop">
    <NavLink className="flex-column-menu-desktop-button" to="/profile/modify">Modifier mes infos</NavLink>
    <NavLink className="flex-column-menu-desktop-button" to="/profile/created">Les histoires créées</NavLink>
    <NavLink className="flex-column-menu-desktop-button" to="/profile/read">Les histoires lues</NavLink>
    <NavLink className="flex-column-menu-desktop-button" to="/profile/pins">Mes badges</NavLink>
  </Nav>
);

// == Export
export default Menu;
