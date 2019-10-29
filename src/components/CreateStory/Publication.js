// == Import : npm
import React from 'react';
import {
  Button, FormGroup, Label, Card, CardTitle, CardText, Row, Col,
}
  from 'reactstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { FiHome } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Publication = ({ sendStory }) => {
  const publishStory = () => () => {
    sendStory();
    document.location.href = '/';
  };

  return (
    <>
      <FormGroup>
        <h4>La fin se rapproche petit à petit...</h4>
      </FormGroup>
      <Row>
        <Col sm="6">
          <Card body>
            {/* Statut de publication - Switch bouton */}
            <CardTitle>Statut de publication</CardTitle>
            <CardText>
              Ici vous allez choisir si votre histoire est publiée et
              accessible aux lecteurs ou si vous préférez la garder
              en mode "brouillon" pour travailler encore dessus.
            </CardText>
            <FormGroup className="publication-button">
              <Label className="publication">Statut de l'histoire</Label>
              <BootstrapSwitchButton
                onlabel="Publié"
                offlabel="Brouillon"
                checked={false}
                width={150}
              />
            </FormGroup>
          </Card>
        </Col>
        <Col sm="6">
          {/* Boite - J'ai fini avec bouton */}
          <Card body>
            <CardTitle>Temps de prendre une pause ou de boucler le livre !</CardTitle>
            <CardText>
              Bravo ! Vous avez bien travaillez aujourd'hui.
              Cliquez joyeusement sur le bouton ci-dessous
              pour quitter l'écran de rédaction d'histoire.
            </CardText>
            <Button color="success" onClick={publishStory}><FiHome /> J'ai fini !</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Publication.propTypes = {
  sendStory: PropTypes.func.isRequired,
};

// == Export
export default Publication;
