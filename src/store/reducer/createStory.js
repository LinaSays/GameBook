// - initialState
const initialState = {
  title: '',
  summary: '',
  select: 1,
  recap: '',
  text: '',
  selectedColor: '',
  choice1: '',
  choice2: '',
  choice3: '',
  chapters: [],
};

// - Actions Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEND_STORY = 'SEND_STORY';
const PUBLISH_STORY = 'PUBLISH_STORY';
export const CREATE_STORY = 'CREATE_STORY';
const SAVE_NEW_STORY = 'SAVE_NEW_STORY';
export const DELETE_STORY = 'DELETE_STORY';
const DELETE_STORY_FROM_DB = 'DELETE_STORY_FROM_DB';
export const FIND_STORY_TO_EDIT = 'FIND_STORY_TO_EDIT';
const UPDATE_STORY = 'UPDATE_STORY';

export const SEND_CHAPTER = 'SEND_CHAPTER';
const SHOW_CHAPTER = 'SHOW_CHAPTER';

export const GET_ALL_CHAPTERS = 'GET_ALL_CHAPTERS';
const SHOW_ALL_CHAPTERS = 'SHOW_ALL_CHAPTERS';
export const GET_SELECTED_CHAPTER = 'GET_SELECTED_CHAPTER';
const SHOW_SELECTED_CHAPTER = 'SHOW_SELECTED_CHAPTER';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case PUBLISH_STORY:
      return {
        ...state,
      };
    case SAVE_NEW_STORY:
      return {
        ...state,
      };
    case DELETE_STORY_FROM_DB:
      return {
        ...state,
      };
    case UPDATE_STORY:
      return {
        ...state,
      };
    case SHOW_CHAPTER:
      return {
        ...state,
        recap: '',
        text: '',
      };
    case SHOW_ALL_CHAPTERS:
      return {
        ...state,
        chapters: action.chapters,
      };
    case SHOW_SELECTED_CHAPTER:
      return {
        ...state,
        recap: action.recap,
        text: action.text,
        selectedColor: action.selectedColor,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const publishStory = () => ({
  type: PUBLISH_STORY,
});

export const sendStory = (id) => ({
  type: SEND_STORY,
  id,
});

export const createNewStory = () => ({
  type: CREATE_STORY,
});
export const saveNewStory = () => ({
  type: SAVE_NEW_STORY,
});

export const deleteStoryFromDB = () => ({
  type: DELETE_STORY_FROM_DB,
});

export const deleteStory = (id) => ({
  type: DELETE_STORY,
  id,
});

export const updateStory = () => ({
  type: UPDATE_STORY,
});

export const findStoryToEdit = (id) => ({
  type: FIND_STORY_TO_EDIT,
  id,
});

export const sendChapter = () => ({
  type: SEND_CHAPTER,
});
export const showChapter = () => ({
  type: SHOW_CHAPTER,
});

export const showAllChapters = (chapters) => ({
  type: SHOW_ALL_CHAPTERS,
  chapters,
});

export const getAllChapters = () => ({
  type: GET_ALL_CHAPTERS,
});

export const showSelectedChapter = (recap, text, selectedColor) => ({
  type: SHOW_SELECTED_CHAPTER,
  recap,
  text,
  selectedColor,
});

export const getSelectedChapter = (id) => ({
  type: GET_SELECTED_CHAPTER,
  id,
});
// - Selectors

// - Export
export default reducer;
