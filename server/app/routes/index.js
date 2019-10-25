const category = require('../model/categoryModel');
const profile = require('../model/profileModel');
const story = require('../model/storyModel');
const chapter = require('../model/chapterModel');
const choice = require('../model/choiceModel');

module.exports = (app) => {
  app.get('/', category.getDemoStories); // display 3 demo stories
  app.get('/categories', category.getAllCategories); // show all categories
  app.get('/categories/:id', category.getCategory); // A VOIR LE NOM show stories of one category
  app.post('/profile', profile.connect); // sign in
  app.post('/profile/add', profile.create); // sign up
  app.get('/profile/:id', profile.getProfile); // my profile
  app.post('/profile/edit/:id', profile.editProfile); // edit my profile
  app.get('/pins', profile.getPins); // show the pins
  app.get('/story', story.getAllStories); // show all stories
  app.post('/story/add', story.createStory); // add story
  app.get('/story/:id', story.getStory); // start story
  app.post('/story/delete', story.deleteStory); // delete story
  app.post('/story/edit/:id', story.editStory); // edit story
  app.get('/chapter/:id', chapter.getChapter); // show situation ???
  app.post('/story/:id/chapter/add', chapter.createChapter); // add situation
  app.post('/story/:id/chapter/delete', chapter.deleteChapter); // delete situation
  app.post('/story/:id/chapter/edit/:id', chapter.editChapter); // edit situation
  // app.post('/choice/add', choice.editChoice); // add choice
  // app.post('/choice/delete/:id', choice.editChoice); // delete choice
  // app.post('/choice/edit/:id', choice.editChoice); // edit choice
  // app.post('/bookmark', todo); // save read situation
};
