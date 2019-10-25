// == Initial State
const initialState = {
  profile: [],
};

// == Types
export const GET_PROFILE = 'GET_PROFILE';
export const SHOW_PROFILE = 'SHOW_PROFILE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return {
        ...state,
        profile: action.profile,
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


// == Selectors


// == Export
export default reducer;
