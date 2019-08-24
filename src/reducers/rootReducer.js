import { combineReducers } from 'redux';
import loginState from './LoginReducer';
import DirectMessageModalState from './DirectMessageModalReducer';
import signupState from './SignupReducer';
export default combineReducers({
  loginState,
  DirectMessageModalState,
  signupState
});