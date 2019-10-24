// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

// Action Creators
import { getStories, getCategory } from 'src/store/reducer/home';

const mapStateToProps = (state) => ({
  story: state.home.story,
  category: state.home.category,
});

const mapDispatchToProps = (dispatch) => ({
  getStories: () => {
    const action = getStories();
    dispatch(action);
  },
  getCategory: () => {
    const action = getCategory();
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
