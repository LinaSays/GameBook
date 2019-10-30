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
import { SEND_STORY, publishStory } from 'src/store/reducer/createStory';

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
    default:
      next(action);
  }
};


export default storyMiddleware;
