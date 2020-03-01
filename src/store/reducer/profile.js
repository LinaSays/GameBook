// == Initial State
const initialState = {
  profile: [],
  pins: [],
  read: [],
  wrote: [],
  user_name: '',
  email: '',
  password: '',
  choice: 1,
  avatar: '',
};

// == Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const GET_PROFILE = 'GET_PROFILE';
const SHOW_PROFILE = 'SHOW_PROFILE';
export const GET_PINS = 'GET_PINS';
const SHOW_PINS = 'SHOW_PINS';
export const GET_READ_STORIES = 'GET_READ_STORIES';
const SHOW_READ_STORIES = 'SHOW_READ_STORIES';
export const GET_WROTE_STORIES = 'GET_WROTE_STORIES';
const SHOW_WROTE_STORIES = 'SHOW_WROTE_STORIES';
export const DELETE_PROFILE = 'DELETE_PROFILE';
const DELETE_PROFILE_FROM_DB = 'DELETE_PROFILE_FROM_DB';
export const EDIT_PROFILE = 'EDIT_PROFILE';
const EDIT_PROFILE_FROM_DB = 'EDIT_PROFILE_FROM_DB';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SHOW_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SHOW_PINS:
      return {
        ...state,
        pins: action.pins,
      };
    case SHOW_READ_STORIES:
      return {
        ...state,
        read: action.read,
      };
    case SHOW_WROTE_STORIES:
      return {
        ...state,
        wrote: action.wrote,
      };
    case DELETE_PROFILE_FROM_DB:
      return {
        ...state,
      };
    default:
      return state;
  }
};

// == Action Creators
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const showProfile = (profile) => ({
  type: SHOW_PROFILE,
  profile,
});

export const getProfile = () => ({
  type: GET_PROFILE,
});

export const showPins = (pins) => ({
  type: SHOW_PINS,
  pins,
});

export const getPins = () => ({
  type: GET_PINS,
});

export const showReadStories = (read) => ({
  type: SHOW_READ_STORIES,
  read,
});

export const getReadStories = () => ({
  type: GET_READ_STORIES,
});

export const showWroteStories = (wrote) => ({
  type: SHOW_WROTE_STORIES,
  wrote,
});

export const getWroteStories = () => ({
  type: GET_WROTE_STORIES,
});

export const deleteProfileFromDB = () => ({
  type: DELETE_PROFILE_FROM_DB,
});

export const deleteProfile = () => ({
  type: DELETE_PROFILE,
});

export const editProfileFromDB = () => ({
  type: EDIT_PROFILE_FROM_DB,
});

export const editProfile = () => ({
  type: EDIT_PROFILE,
});

// == Selectors


// == Export
export default reducer;
