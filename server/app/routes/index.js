const category = require('../model/categoryModel');
const profile = require('../model/profileModel');
const story = require('../model/storyModel');
const chapter = require('../model/chapterModel');
const choice = require('../model/choiceModel');
const withAuth = require('../../middleware');

module.exports = (app) => {
  app.get('/', category.getDemoStories); // display 3 demo stories
  app.get('/categories', category.getAllCategories); // show all categories
  app.get('/categories/:id', category.getCategory); // A VOIR LE NOM show stories of one category
  app.post('/profile', profile.connect); // sign in
  app.get('/profile', profile.getProfile); // my profile
  app.post('/profile/add', profile.create); // sign up
  app.post('/profile/edit/:id', profile.editProfile); // edit my profile
  app.get('/pins', profile.getPins); // show the pins
  app.get('/readstories', profile.getReadStories); // show read stories
  app.get('/wrotestories', profile.getWroteStories); // show wrote srories
  app.get('/story', story.getAllStories); // show all stories
  app.post('/story/add', story.createStory); // add story
  app.get('/story/:id', story.getStory); // start story
  app.patch('/story/:id/publish', story.publishStory); // publish story
  app.delete('/story/delete', story.deleteStory); // delete story
  app.patch('/story/edit/:id', story.editStory); // edit story
  app.get('/chapter/:id', chapter.getChapter); // show next situation
  app.get('/chapter/:id/choices', chapter.getChapterChoices); // show  choices of one situation
  app.post('/story/:id/chapter/add', chapter.createChapter); // add situation
  app.delete('/story/:id/chapter/delete', chapter.deleteChapter); // delete situation
  app.patch('/story/:id/chapter/edit/:id', chapter.editChapter); // edit situation
  app.post('/choice/add', choice.createChoice); // add choice
  app.delete('/choice/delete/:id', choice.deleteChoice); // delete choice
  app.patch('/choice/edit/:id', choice.editChoice); // edit choice
  // app.post('/bookmark', todo); // save read situation

  app.get('/checkToken', withAuth, (req, res) => {
    res.sendStatus(200);
  }); // check if user has a cookie or not
};
