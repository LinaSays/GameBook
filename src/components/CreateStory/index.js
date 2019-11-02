// == Import : npm
import React, { useState } from 'react';
import {
  Jumbotron, Container, Form, Breadcrumb, BreadcrumbItem,
  TabContent, TabPane, Nav, NavItem, NavLink,
}
  from 'reactstrap';
import classnames from 'classnames';
import {
  FiClipboard,
  FiBookOpen,
  FiSend,
}
  from 'react-icons/fi';
import PropTypes from 'prop-types';


// == Import : local
import Couverture from './Couverture';
import Chapitres from './Chapitres';
import Publication from './Publication';
import './createstory.scss';


// == Composant
const CreateStory = ({
  changeValue,
  title,
  summary,
  createNewStory,
  recap,
  text,
  choice,
  choice2,
  getCategory,
  category,
  deleteStory,
  findStoryToEdit,
  sendStory,
  sendChapter,
  selectedColor,
}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Jumbotron fluid className="writer-background">
      {/* Titre de la page Create Story */}
      <h1 className="title">L'aventure démarre enfin...</h1>
      <p className="lead">révélez votre talent d'écrivain et prenez en main le destin de vos lecteurs</p>
      <Container fluid className="container-box">
        <div>
          {/* Breadcrumb de la page Create Story */}
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/">Accueil</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/profile">Mon profil</BreadcrumbItem>
            <BreadcrumbItem active tag="span">Créer une histoire</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div>
          <div>
            {/* Titre des Tabs */}
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  <FiClipboard /> La couverture
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  <FiBookOpen /> Les chapitres
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  <FiSend /> Publication
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Couverture
                  getCategory={getCategory}
                  category={category}
                  changeValue={changeValue}
                  title={title}
                  summary={summary}
                  createNewStory={createNewStory}
                  toggle={toggle}
                  deleteStory={deleteStory}
                  findStoryToEdit={findStoryToEdit}
                />
              </TabPane>
              <TabPane tabId="2">
                <Chapitres
                  changeValue={changeValue}
                  title={title}
                  recap={recap}
                  text={text}
                  choice={choice}
                  choice2={choice2}
                  sendChapter={sendChapter}
                  selectedColor={selectedColor}
                />
              </TabPane>
              <TabPane tabId="3">
                <Publication sendStory={sendStory} />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

CreateStory.propTypes = {
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  recap: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
  choice2: PropTypes.string.isRequired,
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  createNewStory: PropTypes.func.isRequired,
  deleteStory: PropTypes.func.isRequired,
  findStoryToEdit: PropTypes.func.isRequired,
  sendStory: PropTypes.func.isRequired,
};

// == Export
export default CreateStory;
