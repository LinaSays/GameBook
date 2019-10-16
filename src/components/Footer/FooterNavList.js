// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import datas from 'src/data/category';

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
      <li><a className="footer-link" href="http://"><Icon name="facebook f" />Facebook</a></li>
      <li><a className="footer-link" href="http://"><Icon name="twitter" />Instagram</a></li>
      <li><a className="footer-link" href="http://"><Icon name="instagram" />Twitter</a></li>
      <li><a className="footer-link" href="http://"><Icon name="snapchat" />Snapchat</a></li>
    </ul>
  </Col>
);

// == Export
export default FooterNavLIst;
