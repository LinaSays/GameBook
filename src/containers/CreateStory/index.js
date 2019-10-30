// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import createStory from 'src/components/CreateStory';

// Action Creators
import { changeInput, sendStory, createNewStory } from 'src/store/reducer/createStory';
import { getCategory } from 'src/store/reducer/home';

/* === State (données) === */
const mapStateToProps = (state) => ({
  title: state.createStory.title,
  summary: state.createStory.summary,
  recap: state.createStory.recap,
  select: state.createStory.select,
  text: state.createStory.text,
  choice: state.createStory.choice,
  choice2: state.createStory.choice2,
  category: state.home.category,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
    dispatch(action);
  },
  getCategory: () => {
    const action = getCategory();
    dispatch(action);
  },
  sendStory: () => {
    const action = sendStory();
    dispatch(action);
  },
  createNewStory: () => {
    const action = createNewStory();
    dispatch(action);
  },
});

// Container
const createStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(createStory);

// == Export
export default createStoryContainer;
