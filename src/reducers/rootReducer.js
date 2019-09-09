import { combineReducers } from 'redux';

import chatState from './ChatReducer';
import leftNavBarState from './LeftNavBarReducer';
import loaderState from './LoaderReducer';
import loginState from './LoginReducer';
import modalState from './ModalReducer';
import signupState from './SignupReducer';
export default combineReducers({
  chatState,
  leftNavBarState,
  loaderState,
  loginState,
  modalState,
  signupState
});