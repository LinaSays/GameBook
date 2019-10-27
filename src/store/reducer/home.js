// - initialState
const initialState = {
  story: [],
  category: [],
  storylist: [],
};

// - Actions Types
export const GET_STORIES = 'GET_STORIES';
const SHOW_STORIES = 'SHOW_STORIES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
const SHOW_CATEGORIES = 'SHOW_CATEGORIES';
export const GET_CATEGORY_STORIES = 'GET_CATEGORY_STORIES';
const SHOW_CATEGORY_STORIES = 'SHOW_CATEGORY_STORIES';

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
    case SHOW_CATEGORY_STORIES:
      return {
        ...state,
        storylist: action.storylist,
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

export const showCategoryStories = (storylist) => ({
  type: SHOW_CATEGORY_STORIES,
  storylist,
});

export const getCategoryStories = () => ({
  type: GET_CATEGORY_STORIES,
});

export default reducer;
