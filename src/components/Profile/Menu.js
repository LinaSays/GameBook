// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

// == Import : local

// == Composant
const Menu = () => (
  <Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link href="/home">Modifier mes infos</Nav.Link>
    <Nav.Link href="/home">Les histoires créées</Nav.Link>
    <Nav.Link href="/home">Les histoires lues</Nav.Link>
    <Nav.Link href="/home">Mes badges</Nav.Link>
    <Button variant="warning"><Link to="/createstory" className="menu-link">Ecrire une histoire</Link></Button>
  </Nav>
);


// == Export
export default Menu;
