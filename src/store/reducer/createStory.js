// - initialState
const initialState = {
  title: '',
  summary: '',
  recap: '',
  text: '',
  choice: '',
  choice2: '',
};

// - Actions Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEND_STORY = 'SEND_STORY';
const PUBLISH_STORY = 'PUBLISH_STORY';

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

export const sendStory = () => ({
  type: SEND_STORY,
});

// - Selectors

// - Export
export default reducer;
