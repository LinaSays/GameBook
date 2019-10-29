import axios from 'axios';
import 'regenerator-runtime/runtime';

import {
  GET_START_STORIES,
  showStartStories,
  GET_CHOICES,
  showChoices,
} from 'src/store/reducer/startStory';

async function getStartStories(store) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://localhost:3000${window.location.pathname}`);
    console.log(response);
    const save = showStartStories(
      response.data[0].id,
      response.data[0].text,
      response.data[0].color,
      response.data[0].image,
    );
    console.log(response.data[0].id);
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
    console.log(response);
    const save = showChoices(response.data);
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
    default:
      next(action);
  }
};


export default storyMiddleware;
