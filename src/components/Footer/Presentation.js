// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

// == Import : local


// == Composant
const Presentation = () => (
  <Col sm={12} md={6} lg={3}>
    <h4 className="logo">Logo</h4>
    <p className="footer-text">xPider is multi concept landing page theme for startups. Build your next landing page with proper variations. Get started now.</p>
    <div className="icon-group">
      <Icon name="facebook f" />
      <Icon name="twitter" />
      <Icon name="instagram" />
    </div>
  </Col>
);

// == Export
export default Presentation;
