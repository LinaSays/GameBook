// == Import : npm
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// == Import : local


// == Composant
const Navigation = () => (
  <Navbar bg="light" expand="lg">
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
      <Nav className="ml-auto">
        <Nav.Link href="#home">Accueil</Nav.Link>
        <Nav.Link href="#link">Concept</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <Nav className="ml-5" />
        <Nav.Link href="#home">Inscription</Nav.Link>
        <Nav.Link href="#link">Connexion</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

// == Export
export default Navigation;
