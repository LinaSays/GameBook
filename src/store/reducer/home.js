// - initialState
const initialState = {
  story: [],
};

// - Actions Types
export const GET_STORIES = 'GET_STORIES';
export const SHOW_STORIES = 'SHOW_STORIES';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_STORIES:
      return {
        ...state,
        story: action.story,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const showStories = (story) => ({
  type: SHOW_STORIES,
  story,
});

export const getStories = () => ({
  type: GET_STORIES,
});


export default reducer;
