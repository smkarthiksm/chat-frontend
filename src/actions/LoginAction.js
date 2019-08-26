import * as ActionConstants from "../constants/ActionConstants"
import * as Api from "../api/ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';
import UserModel from '../models/UserModel';
import * as Utility from '../utilities/Utility';

export const updateFields = (prop, value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_LOGIN_INPUTS,
    payload: {
      prop: prop,
      value: value
    }
  });
}

export const login = (props) => dispatch => {

  const userModel = new UserModel();
  userModel.email = props.state.email;
  userModel.password = props.state.password;
  dispatch({ type: ActionConstants.LOGIN_LOADER_STATUS, payload: true });
  Api.getSession(ApplicationConstants.BASE_URL + ApplicationConstants.LOGIN_URL, userModel)
    .then(response => {
      dispatch({ type: ActionConstants.LOGIN_LOADER_STATUS, payload: false });
      dispatch({ type: ActionConstants.CLEAR_LOGIN_INPUT_FIELDS });
      Utility.saveJWT(response);
      props.history.push('/');
    })
    .catch(err => {
      dispatch({ type: ActionConstants.LOGIN_LOADER_STATUS, payload: false });
    });
}

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_LOGIN_INPUT_FIELDS
  });
}