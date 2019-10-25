// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Signin from 'src/components/Signin';
import { changeInput } from 'src/store/reducer/signin';

// Action Creators
const mapStateToProps = (state, ownProps) => ({
  email: state.signin.email,
  password: state.signin.password,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
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
