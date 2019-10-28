// == Initial State
const initialState = {
  profile: [],
  pins: [],
  read: [],
  wrote: [],
};

// == Types
export const GET_PROFILE = 'GET_PROFILE';
const SHOW_PROFILE = 'SHOW_PROFILE';
export const GET_PINS = 'GET_PINS';
const SHOW_PINS = 'SHOW_PINS';
export const GET_READ_STORIES = 'GET_READ_STORIES';
const SHOW_READ_STORIES = 'SHOW_READ_STORIES';
export const GET_WROTE_STORIES = 'GET_WROTE_STORIES';
const SHOW_WROTE_STORIES = 'SHOW_WROTE_STORIES';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

// == Action Creators
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

// == Selectors


// == Export
export default reducer;
