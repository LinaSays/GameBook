// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import datas from 'src/data/category';
import { Link } from 'react-router-dom';

// == Import : local


// == Composant
const FooterNavLIst = () => (
  <Col>
    <h5 className="footer-titlelink">Retrouvez-nous</h5>
    {/* <ul>
      {
        datas.map((data) => {
          return <li key={data}><a className="footer-link" href="http://">{data}</a></li>
        })
      }
    </ul> */}
    <ul>
      <Link to="/facebook" className="footer-link"><Icon name="facebook f" />Facebook</Link>
      <Link to="/instagram" className="footer-link"><Icon name="twitter" />Twitter</Link>
      <Link to="/twitter" className="footer-link"><Icon name="instagram" />Instagram</Link>
      <Link to="/snapchat" className="footer-link"><Icon name="snapchat" />Snapchat</Link>
    </ul>
  </Col>
);

// == Export
export default FooterNavLIst;
