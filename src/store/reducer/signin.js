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

// - Selectors

// - Export
export default reducer;
