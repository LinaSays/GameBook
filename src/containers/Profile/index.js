// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';

// Action Creators
import {
  getProfile,
  getPins,
  getReadStories,
  getWroteStories,
  changeInput,
} from 'src/store/reducer/profile';


const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  pins: state.profile.pins,
  read: state.profile.read,
  wrote: state.profile.wrote,
  user_name: state.profile.user_name,
  email: state.profile.email,
  password: state.profile.password,
  avatar: state.profile.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeInput(name, value);
    dispatch(action);
  },
  getProfile: () => {
    const action = getProfile();
    dispatch(action);
  },
  getPins: () => {
    const action = getPins();
    dispatch(action);
  },
  getReadStories: () => {
    const action = getReadStories();
    dispatch(action);
  },
  getWroteStories: () => {
    const action = getWroteStories();
    dispatch(action);
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
