// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Categories from 'src/components/Categories';

// Action Creators
import { getCategoryStories } from 'src/store/reducer/home';

const mapStateToProps = (state) => ({
  storylist: state.home.storylist,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryStories: () => {
    const action = getCategoryStories();
    dispatch(action);
  },
});

// Container
const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);

// == Export
export default CategoriesContainer;
