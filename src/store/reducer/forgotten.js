// - initialState
const initialState = {
    changeEmail: '',
  };
  
  // - Actions Types
  const CHANGE_INPUT = 'CHANGE_INPUT';
  
  // export const CONNECT_USER = 'CONNECT_USER';
  
  // - Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_INPUT:
        return {
          ...state,
          [action.name]: action.value,
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
  
  
  // export const connectUser = () => ({
  //   type: CONNECT_USER,
  // });
  
  // - Selectors
  
  // - Export
  export default reducer;