// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

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
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

// == Export
export default FooterContainer;
