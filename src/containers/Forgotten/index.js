// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Forgotten from 'src/components/Signin/Forgotten';
import { changeInput } from 'src/store/reducer/forgotten';

// Action Creators
const mapStateToProps = (state, ownProps) => ({
  changeEmail: state.forgotten.changeEmail,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
    dispatch(action);
  },
});

// Container
const ForgottenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forgotten);

// == Export
export default ForgottenContainer;