// - initialState
const initialState = {
  story: [],
  category: [],
};

// - Actions Types
export const GET_STORIES = 'GET_STORIES';
export const SHOW_STORIES = 'SHOW_STORIES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SHOW_CATEGORIES = 'SHOW_CATEGORIES';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_STORIES:
      return {
        ...state,
        story: action.story,
      };
    case SHOW_CATEGORIES:
      return {
        ...state,
        category: action.category,
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

export const showCategory = (category) => ({
  type: SHOW_CATEGORIES,
  category,
});

export const getCategory = () => ({
  type: GET_CATEGORIES,
});


export default reducer;
