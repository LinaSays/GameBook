// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import StartStory from 'src/components/StartStory';

// Action Creators
import { getStartStories } from 'src/store/reducer/startStory';

/* === State (données) === */
const mapStateToProps = (state) => ({
  id: state.startStory.id,
  text: state.startStory.text,
  color: state.startStory.color,
  image: state.startStory.image,
  choice: state.startStory.choice,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  getStartStories: () => {
    const action = getStartStories();
    dispatch(action);
  },
});

// Container
const StartStoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartStory);

// == Export
export default StartStoryContainer;
