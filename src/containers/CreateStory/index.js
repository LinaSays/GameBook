// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import createStory from 'src/components/CreateStory';

// Action Creators
import { changeInput } from 'src/store/reducer/createStory';

/* === State (données) === */
const mapStateToProps = (state) => ({
  title: state.createStory.title,
  summary: state.createStory.summary,
  recap: state.createStory.recap,
  text: state.createStory.text,
  choice: state.createStory.choice,
  choice2: state.createStory.choice2,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
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
