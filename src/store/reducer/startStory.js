// - initialState
const initialState = {
  id: 0,
  text: '',
  color: '',
  image: '',
  choice: [],
};

// - Actions Types
export const GET_START_STORIES = 'GET_START_STORIES';
const SHOW_START_STORIES = 'SHOW_START_STORIES';
export const GET_CHOICES = 'GET_CHOICES';
const SHOW_CHOICES = 'SHOW_CHOICES';
export const GET_NEXT_CHAPTER = 'GET_NEXT_CHAPTER';
const SHOW_NEXT_CHAPTER = 'SHOW_NEXT_CHAPTER';

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
    case SHOW_CHOICES:
      return {
        ...state,
        choice: action.choice,
      };
    case SHOW_NEXT_CHAPTER:
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

export const showChoices = (choice) => ({
  type: SHOW_CHOICES,
  choice,
});

export const getChoices = (id) => ({
  type: GET_CHOICES,
  id,
});

export const showNextChapter = (id, text, color, image) => ({
  type: SHOW_NEXT_CHAPTER,
  id,
  text,
  color,
  image,
});

export const getNextChapter = (id) => ({
  type: GET_NEXT_CHAPTER,
  id,
});

// - Selectors

// - Export
export default reducer;
