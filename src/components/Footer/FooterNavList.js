// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import datas from 'src/data/category';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaSnapchatGhost,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

// == Import : local


// == Composant
const FooterNavList = ({ isConnected }) => (
  <Col>

    {
       isConnected ? (
         <>
           <h5 className="footer-titlelink">Catégories</h5>
           <ul>
             {
          datas.map((data) => <li key={data}><a className="footer-link" href="http://">{data}</a></li>)
        }
           </ul>
         </>

       ) : (
         <>
           <h5 className="footer-titlelink">Retrouvez-nous</h5>
           <ul>
             <Link to="/facebook" className="footer-link"><FaFacebookF /> Facebook</Link>
             <Link to="/instagram" className="footer-link"><FaTwitter /> Twitter</Link>
             <Link to="/twitter" className="footer-link"><FaInstagram /> Instagram</Link>
             <Link to="/snapchat" className="footer-link"><FaSnapchatGhost /> Snapchat</Link>
           </ul>
         </>
       )
     }

  </Col>
);

// == Validation props
FooterNavList.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default FooterNavList;
