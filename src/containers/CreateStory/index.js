// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import createStory from 'src/components/CreateStory';

// Action Creators
import { changeInput } from 'src/store/reducer/createStory';

/* === State (données) === */
const mapStateToProps = (state) => ({
  titleValue: state.createStory.titleInput,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    const action = changeInput(value);
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
