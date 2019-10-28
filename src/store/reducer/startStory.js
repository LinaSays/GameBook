// - initialState
const initialState = {
  id: 0,
  text: '',
  color: '',
  image: '',
};

// - Actions Types
export const GET_START_STORIES = 'GET_START_STORIES';
const SHOW_START_STORIES = 'SHOW_START_STORIES';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_START_STORIES:
      return {
        ...state,
        id: action.id,
        text: action.text,
        color: action.color,
        image: action.image,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const showStartStories = (id, text, color, image) => ({
  type: SHOW_START_STORIES,
  id,
  text,
  color,
  image,
});

export const getStartStories = () => ({
  type: GET_START_STORIES,
});

// - Selectors

// - Export
export default reducer;
