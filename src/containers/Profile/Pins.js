// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Pins from 'src/components/Profile/Pins';

// Action Creators
import { getPins } from 'src/store/reducer/profile';


const mapStateToProps = (state) => ({
  pins: state.profile.pins,
});

const mapDispatchToProps = (dispatch) => ({
  getPins: () => {
    const action = getPins();
    dispatch(action);
  },
});

// Container
const PinsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pins);

// == Export
export default PinsContainer;
