import axios from 'axios';

import { GET_START_STORIES, showStartStories } from 'src/store/reducer/startStory';

const storyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_START_STORIES: {
      axios.defaults.withCredentials = true;
      axios.get(`http://localhost:3000${window.location.pathname}`)
        .then((response) => {
          const save = showStartStories(
            response.data[0].id,
            response.data[0].text,
            response.data[0].color,
            response.data[0].image,
          );
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    default:
      next(action);
  }
};

export default storyMiddleware;
