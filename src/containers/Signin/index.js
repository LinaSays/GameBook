// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Signin from 'src/components/Signin';
import { changeInput, connectUser } from 'src/store/reducer/signin';

// Action Creators
const mapStateToProps = (state) => ({
  email: state.signin.email,
  password: state.signin.password,
  isConnected: state.signin.isConnected,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
    dispatch(action);
  },
  submitUser: () => {
    const action = connectUser();
    dispatch(action);
  },
});

// Container
const SigninContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);

// == Export
export default SigninContainer;
