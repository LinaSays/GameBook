// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Signup from 'src/components/Signup';
import { changeInput, createUser } from 'src/store/reducer/signin';

// Action Creators


const mapStateToProps = (state) => ({
  user_name: state.signin.user_name,
  email: state.signin.email,
  password: state.signin.password,
  confirm: state.signin.confirm,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
    dispatch(action);
  },
  createUser: () => {
    const action = createUser();
    dispatch(action);
  },
});

// Container
const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

// == Export
export default SignupContainer;
