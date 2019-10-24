// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

// Action Creators
import { getStories } from 'src/store/reducer/home';

const mapStateToProps = (state) => ({
  story: state.home.story,
});

const mapDispatchToProps = (dispatch) => ({
  getStories: () => {
    const action = getStories();
    dispatch(action);
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;
