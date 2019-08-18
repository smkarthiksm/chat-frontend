import { combineReducers } from 'redux';
import loginState from './LoginReducer';
import signupState from './SignupReducer';
export default combineReducers({
  loginState,
  signupState
});