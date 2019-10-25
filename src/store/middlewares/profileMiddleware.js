import axios from 'axios';

import { GET_PROFILE, showProfile } from 'src/store/reducer/profile';

const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      axios.get(`http://localhost:3000/profile/${1}`)
        .then((response) => {
          const save = showProfile(response.data);
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

export default profileMiddleware;
