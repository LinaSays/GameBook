// == Import : npm
import React, { useState } from 'react';
import {
  Jumbotron, Container, Breadcrumb, BreadcrumbItem,
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
  choice1,
  choice2,
  choice3,
  getCategory,
  category,
  deleteStory,
  findStoryToEdit,
  sendStory,
  sendChapter,
  selectedColor,
  chapters,
  getAllChapters,
  getSelectedChapter,
  sendChoice,
  deleteChapter,
  findChapterToEdit,
}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Jumbotron fluid className="writer-background">
      {/* Title of the page Create Story */}
      <h1 className="title">L'aventure démarre enfin...</h1>
      <p className="lead">révélez votre talent d'écrivain et prenez en main le destin de vos lecteurs</p>
      <Container fluid className="container-box">
        <div>
          {/* Breadcrumb of Create Story */}
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/">Accueil</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="/profile">Mon profil</BreadcrumbItem>
            <BreadcrumbItem active tag="span">Créer une histoire</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div>
          <div>
            {/* Title of Tabs */}
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
                  choice1={choice1}
                  choice2={choice2}
                  choice3={choice3}
                  sendChapter={sendChapter}
                  selectedColor={selectedColor}
                  chapters={chapters}
                  getAllChapters={getAllChapters}
                  getSelectedChapter={getSelectedChapter}
                  sendChoice={sendChoice}
                  deleteChapter={deleteChapter}
                  findChapterToEdit={findChapterToEdit}
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
  choice1: PropTypes.string,
  choice2: PropTypes.string,
  choice3: PropTypes.string,
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  createNewStory: PropTypes.func.isRequired,
  deleteStory: PropTypes.func.isRequired,
  findStoryToEdit: PropTypes.func.isRequired,
  sendStory: PropTypes.func.isRequired,
  sendChapter: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
  chapters: PropTypes.array.isRequired,
  getAllChapters: PropTypes.func.isRequired,
  getSelectedChapter: PropTypes.func.isRequired,
  sendChoice: PropTypes.func.isRequired,
  deleteChapter: PropTypes.func.isRequired,
  findChapterToEdit: PropTypes.func.isRequired,
};

CreateStory.defaultProps = {
  choice1: '',
  choice2: '',
  choice3: '',
  selectedColor: '',
};

// == Export
export default CreateStory;
