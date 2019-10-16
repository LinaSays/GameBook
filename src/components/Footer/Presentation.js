// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


// == Import : local


// == Composant
const Presentation = () => (
  <Col sm={12} md={6} lg={3}>
    <h4 className="logo">Logo</h4>
    <p className="footer-text">xPider is multi concept landing page theme for startups. Build your next landing page with proper variations.<br />Get started now.</p>
    {/* <div className="icon-group">
      <Link to="/facebook"><Icon name="facebook f" /></Link>
      <Link to="/instagram"><Icon name="twitter" /></Link>
      <Link to="/twitter"><Icon name="instagram" /></Link>
      <Link to="/snapchat"><Icon name="snapchat" /></Link>
    </div> */}
  </Col>
);

// == Export
export default Presentation;
