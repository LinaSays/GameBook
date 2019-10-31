// == Import : npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

// == Import : local

// == Composant
const Menu = () => (
  <Nav className="flex-column menu">
    <NavLink to="/profile/modify">Modifier mes infos</NavLink>
    <NavLink to="/profile/created">Les histoires créées</NavLink>
    <NavLink to="/profile/read">Les histoires lues</NavLink>
    <NavLink to="/profile/pins">Mes badges</NavLink>
    <Button variant="warning"><Link to="/createstory" className="menu-link">Ecrire une histoire</Link></Button>
  </Nav>
);

// == Export
export default Menu;
