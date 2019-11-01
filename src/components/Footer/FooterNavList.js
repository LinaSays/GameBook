// == Import : npm
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaSnapchatGhost,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

// == Import : local


// == Composant
class FooterNavList extends React.Component {
  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  render() {
    const { isConnected, category } = this.props;
    return (
      <Col>
        {
          isConnected ? (
            <>
              <h5 className="footer-titlelink">Catégories</h5>
              <ul>
                {
                  category.map((data) => <li key={data.id}><Link className="footer-link" to={`categories/${data.id}`}>{data.name}</Link></li>)
            }
              </ul>
            </>
          ) : (
            <>
              <h5 className="footer-titlelink">Retrouvez-nous</h5>
              <ul>
                <Link to="/facebook" className="footer-link"><FaFacebookF className="mr-2" /> Facebook</Link>
                <Link to="/instagram" className="footer-link"><FaTwitter className="mr-2" /> Twitter</Link>
                <Link to="/twitter" className="footer-link"><FaInstagram className="mr-2" /> Instagram</Link>
                <Link to="/snapchat" className="footer-link"><FaSnapchatGhost className="mr-2" /> Snapchat</Link>
              </ul>
            </>
          )
        }
      </Col>
    );
  }
}

// == Validation props
FooterNavList.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
};

// == Export
export default FooterNavList;
