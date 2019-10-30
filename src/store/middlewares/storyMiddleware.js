import axios from 'axios';
import 'regenerator-runtime/runtime';

import {
  GET_START_STORIES,
  showStartStories,
  GET_CHOICES,
  showChoices,
  GET_NEXT_CHAPTER,
  showNextChapter,
} from 'src/store/reducer/startStory';
import {
  SEND_STORY,
  publishStory,
  CREATE_STORY,
  saveNewStory,
  DELETE_STORY,
  deleteStoryFromDB,
  FIND_STORY_TO_EDIT,
  updateStory
} from 'src/store/reducer/createStory';

async function getStartStories(store) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://localhost:3000${window.location.pathname}`);
    const save = showStartStories(
      response.data[0].id,
      response.data[0].text,
      response.data[0].color,
      response.data[0].image,
    );
    getChoices(store, response.data[0].id);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function getNextChapter(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://localhost:3000/chapter/${id}`);
    const save = showNextChapter(
      response.data[0].id,
      response.data[0].text,
      response.data[0].color,
      response.data[0].image,
    );
    getChoices(store, response.data[0].id);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function getChoices(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://localhost:3000/chapter/${id}/choices`);
    const save = showChoices(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function sendPublishedStory(store) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.patch(`http://localhost:3000/story/${id}/publish`);
    const save = publishStory(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function newStory(store) {
  try {
    const state = store.getState();
    const { title, summary, select } = state.createStory;
    axios.defaults.withCredentials = true;
    const response = await axios.post('http://localhost:3000/story/add', {
      title, summary, select,
    });
    const save = saveNewStory(response.data);
    console.log(response);
    store.dispatch(save);
    sessionStorage.setItem('story', response.data);
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteStory(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.delete('http://localhost:3000/story/delete', { data: { id } });
    const save = deleteStoryFromDB(response.data);
    store.dispatch(save);
    sessionStorage.removeItem('story');
  }
  catch (err) {
    console.log(err);
  }
}

async function editStory(store, id) {
  try {
    const state = store.getState();
    const { title, summary, select } = state.createStory;
    axios.defaults.withCredentials = true;
    const response = await axios.patch('http://localhost:3000/story/edit', {
      id, title, summary, select,
    });
    const save = updateStory(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

const storyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_START_STORIES: {
      getStartStories(store);
      break;
    }
    case GET_CHOICES: {
      getChoices(store, action.id);
      break;
    }
    case GET_NEXT_CHAPTER: {
      getNextChapter(store, action.id);
      break;
    }
    case SEND_STORY: {
      sendPublishedStory(store);
      break;
    }
    case CREATE_STORY: {
      newStory(store);
      break;
    }
    case DELETE_STORY: {
      deleteStory(store, action.id);
      break;
    }
    case FIND_STORY_TO_EDIT: {
      editStory(store, action.id);
      break;
    }
    default:
      next(action);
  }
};


export default storyMiddleware;
