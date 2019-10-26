// - initialState
const initialState = {
  email: '',
  password: '',
  isConnected: false,
  user: [],
};

// - Actions Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const CONNECT_USER = 'CONNECT_USER';
const SAVE_USER = 'SAVE_USER';
export const GET_HOME = 'GET_HOME';
export const SHOW_HOME = 'SHOW_HOME';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        isConnected: true,
        user: action.user,
      };
    case SHOW_HOME:
      return {
        ...state,
        isConnected: true,
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

export const connectUser = () => ({
  type: CONNECT_USER,
});
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const showHome = (home) => ({
  type: SHOW_HOME,
  home,
});

export const getHome = () => ({
  type: GET_HOME,
});
// - Selectors

// - Export
export default reducer;
