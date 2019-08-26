import { combineReducers } from 'redux';
import leftNavBarState from './LeftNavBarReducer';
import listState from './ListReducer';
import loginState from './LoginReducer';
import modalState from './ModalReducer';
import signupState from './SignupReducer';
export default combineReducers({
  leftNavBarState,
  listState,
  loginState,
  modalState,
  signupState
});