// == Import : npm
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

// == Import : local
import Pins from './Pins';
import Info from './Info';
import Menu from './Menu';
import Change from './Change';
import Wrote from './Wrote';
import Read from './Read';
import Mobile from './Mobile';
import './profile.scss';

// == Composant
class Profile extends React.Component {
  componentDidMount() {
    const { getProfile, getPins, getReadStories, getWroteStories } = this.props;
    getProfile();
    getPins();
    getReadStories();
    getWroteStories();
  }

  render() {
    const { profile, location, pins, read, wrote } = this.props;
    // const { path, url } = this.props.match;
    switch (location.pathname) {
      case '/profile/modify': {
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Menu />
              </Col>
              <Col>
                <Change {...this.props} />
              </Col>
            </Row>
          </Container>
        ); }
      case '/profile/created': {
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Menu />
              </Col>
              {wrote.map((item) => (
                <Col><Wrote key={item.image} {...item} /></Col>
              ))}
            </Row>
          </Container>
        ); }
      case '/profile/read': {
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Menu />
              </Col>
              {read.map((item) => (
                <Col><Read key={item.image} {...item} /></Col>
              ))}
            </Row>
          </Container>
        ); }
      case '/profile/pins': {
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Menu />
              </Col>
              <Col>
                {pins.map((item) => (
                  <Pins key={item.badge} {...item} />
                ))}
              </Col>
            </Row>
          </Container>
        ); }
      default:
        return (
          <Container>
            <Row>
              <Col>
                {profile.map((item) => (
                  <Info key={item.id} {...item} />
                ))}
              </Col>
            </Row>
            <Row className="nav-desktop">
              <Col xs={6} md={4}>
                <Menu />
              </Col>
              <Col>
                Bienvenue
              </Col>
            </Row>
            <Row className="nav-mobile">
              <Col><Mobile /></Col>
            </Row>
          </Container>
        );
    }
  }
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  getPins: PropTypes.func.isRequired,
  pins: PropTypes.array.isRequired,
  getReadStories: PropTypes.func.isRequired,
  read: PropTypes.array.isRequired,
  getWroteStories: PropTypes.func.isRequired,
  wrote: PropTypes.array.isRequired,
};

// == Export
export default withRouter(Profile);
