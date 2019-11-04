// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import NavNew from 'src/components/NavNew';

// Action Creators
import { getCategory } from 'src/store/reducer/home';

const mapStateToProps = (state) => ({
  category: state.home.category,
});


const mapDispatchToProps = (dispatch) => ({
  getCategory: () => {
    const action = getCategory();
    dispatch(action);
  },
});

// Container
const NavNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavNew);

// == Export
export default NavNewContainer;
