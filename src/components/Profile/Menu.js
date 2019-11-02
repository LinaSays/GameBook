// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local

// == Composant
const Menu = () =>  (
  <nav className="menu">
    <NavLink to="/profile">Modifier mes infos</NavLink>
    <NavLink to="/profile/created">Les histoires créées</NavLink>
    <NavLink to="/profile/read">Les histoires lues</NavLink>
    <NavLink to="/profile/pins">Mes badges</NavLink>
  </nav>
);

// == Export
export default Menu;
