// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { getHome } from 'src/store/reducer/signin';

const mapStateToProps = (state) => ({
  isConnected: state.signin.isConnected,
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
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
