// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Signup from 'src/components/Signup';
import { changeInput } from 'src/store/reducer/connexion';

// Action Creators


const mapStateToProps = (state) => ({
  user_name: state.connexion.user_name,
  email: state.connexion.email,
  password: state.connexion.password,
  confirm: state.connexion.confirm,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
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
