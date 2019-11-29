// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { getHome } from 'src/store/reducer/signin';
import { getCategory } from 'src/store/reducer/home';

const mapStateToProps = (state) => ({
  isConnected: state.signin.isConnected,
  category: state.home.category,
  loading: state.signin.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    const action = '';
    dispatch(action);
  },
  getHome: () => {
    const action = getHome();
    dispatch(action);
  },
  getCategory: () => {
    const action = getCategory();
    dispatch(action);
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
