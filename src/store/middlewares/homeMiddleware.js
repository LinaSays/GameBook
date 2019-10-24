import axios from 'axios';

import { GET_STORIES, showStories } from 'src/store/reducer/home';

const homeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STORIES: {
      axios.get('http://localhost:3000')
        .then((response) => {
          console.log(response.data);
          const save = showStories(response.data);
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

export default homeMiddleware;
