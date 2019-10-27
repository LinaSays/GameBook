// == Initial State
const initialState = {
  profile: [],
  pins: [],
};

// == Types
export const GET_PROFILE = 'GET_PROFILE';
const SHOW_PROFILE = 'SHOW_PROFILE';
export const GET_PINS = 'GET_PINS';
const SHOW_PINS = 'SHOW_PINS';

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

// == Selectors


// == Export
export default reducer;
