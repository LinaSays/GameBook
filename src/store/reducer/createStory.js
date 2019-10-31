// - initialState
const initialState = {
  title: '',
  summary: '',
  select: 1,
  recap: '',
  text: '',
  choice: '',
  choice2: '',
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

// - Selectors

// - Export
export default reducer;
