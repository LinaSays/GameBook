// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import StartStory from 'src/components/StartStory';

// Action Creators
import { getStartStories, getNextChapter } from 'src/store/reducer/startStory';
import { getProfile } from 'src/store/reducer/profile';

/* === State (données) === */
const mapStateToProps = (state) => ({
  id: state.startStory.id,
  text: state.startStory.text,
  color: state.startStory.color,
  image: state.startStory.image,
  choice: state.startStory.choice,
  profile: state.profile.profile,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  getStartStories: () => {
    const action = getStartStories();
    dispatch(action);
  },
  getNextChapter: (id) => {
    const action = getNextChapter(id);
    dispatch(action);
  },
  getProfile: () => {
    const action = getProfile();
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
