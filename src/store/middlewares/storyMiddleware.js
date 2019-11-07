import axios from 'axios';
import 'regenerator-runtime/runtime';
import { toast } from 'react-toastify';

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
  updateStory,
  SEND_CHAPTER,
  showChapter,
  GET_ALL_CHAPTERS,
  showAllChapters,
  GET_SELECTED_CHAPTER,
  showSelectedChapter,
  SEND_CHOICE,
  showChoice,
  DELETE_CHAPTER,
  deleteChapterFromDB,
  FIND_CHAPTER_TO_EDIT,
  updateChapter,
} from 'src/store/reducer/createStory';

async function getStartStories(store) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://api.gamebook.tech${window.location.pathname}`);
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
  // cas spécial de la FAQ
  if (isNaN(id)) {
    document.location.href = id;
    // window.history.pushState(null, null, id);
  }
  else try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://api.gamebook.tech/chapter/${id}`);
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
    const response = await axios.get(`http://api.gamebook.tech/chapter/${id}/choices`);
    const save = showChoices(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function sendPublishedStory(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.patch(`http://api.gamebook.tech/story/${id}/publish`, { id });
    const save = publishStory(response.data);
    store.dispatch(save);
    sessionStorage.removeItem('story');
  }
  catch (err) {
    console.log(err);
  }
}

async function newStory(store) {
  try {
    const state = store.getState();
    const { title, summary, select } = state.createStory;
    if (title.length <= 0 && summary.length < 5) {
      toast.error('Veuillez saisir un titre ou un résumé');
    }
    else {
      axios.defaults.withCredentials = true;
      const response = await axios.post('http://api.gamebook.tech/story/add', {
        title, summary, select,
      });
      const save = saveNewStory(response.data);
      console.log(response);
      store.dispatch(save);
      sessionStorage.setItem('story', response.data);
    }
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteStory(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.delete('http://api.gamebook.tech/story/delete', { data: { id } });
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
    const response = await axios.patch('http://api.gamebook.tech/story/edit', {
      id, title, summary, select,
    });
    const save = updateStory(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function newChapter(store) {
  try {
    const state = store.getState();
    const { recap, text, selectedColor } = state.createStory;
    const id = sessionStorage.getItem('story');
    if (recap.length === 0) {
      toast.error('Veuillez saisir un résumé de chapitre');
    }
    else {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`http://api.gamebook.tech/story/${id}/chapter/add`, {
        recap, text, selectedColor,
      });
      const save = showChapter(response.data);
      store.dispatch(save);
    }
  }
  catch (err) {
    console.log(err);
  }
}

async function getAllChapters(store) {
  try {
    const id = sessionStorage.getItem('story');
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://api.gamebook.tech/story/${id}/chapters`);
    const save = showAllChapters(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function getSelectedChapter(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`http://api.gamebook.tech/chapter/${id}`);
    const save = showSelectedChapter(
      response.data[0].recap,
      response.data[0].text,
      response.data[0].selectedColor,
    );
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function newChoice(store, id) {
  try {
    const id_situation_parent = document.getElementsByName('selectChapter')[0].value;
    const id_situation_child = document.getElementsByName(`destination${id}`)[0].value;
    const text = document.getElementsByName(`choice${id}`)[0].value;
    axios.defaults.withCredentials = true;
    const response = await axios.post('http://api.gamebook.tech/choice/add', {
      text, id_situation_parent, id_situation_child,
    });
    const save = showChoice(response.data);
    console.log(response);
    store.dispatch(save);
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteChapter(store, id) {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.delete('http://api.gamebook.tech/chapter/delete', { data: { id } });
    const save = deleteChapterFromDB(response.data);
    store.dispatch(save);
  }
  catch (err) {
    console.error(err);
  }
}

async function editChapter(store, id) {
  try {
    const state = store.getState();
    const { recap, text, selectedColor } = state.createStory;
    axios.defaults.withCredentials = true;
    const response = await axios.patch('http://api.gamebook.tech/chapter/edit', {
      recap, text, selectedColor, id,
    });
    const save = updateChapter(response.data);
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
      sendPublishedStory(store, action.id);
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
    case SEND_CHAPTER: {
      newChapter(store);
      break;
    }
    case GET_ALL_CHAPTERS: {
      getAllChapters(store);
      break;
    }
    case GET_SELECTED_CHAPTER: {
      getSelectedChapter(store, action.id);
      break;
    }
    case SEND_CHOICE: {
      newChoice(store, action.id);
      break;
    }
    case DELETE_CHAPTER: {
      deleteChapter(store, action.id);
      break;
    }
    case FIND_CHAPTER_TO_EDIT: {
      editChapter(store, action.id);
      break;
    }
    default:
      next(action);
  }
};


export default storyMiddleware;
