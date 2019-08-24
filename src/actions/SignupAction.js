import * as ActionConstants from "../constants/ActionConstants"
import * as Api from "../api/ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';
import UserModel from '../models/UserModel';

export const updateFields = (prop, value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_SIGNUP_INPUTS,
    prop: prop,
    payload: value
  });
}

export const signup = (props) => dispatch => {
  const userModel = new UserModel(0, props.state.firstName, props.state.lastName, props.state.email, props.state.phoneNumber, props.state.password);
  dispatch({ type: ActionConstants.SIGNUP_LOADER_STATUS, payload: true });
  Api.getSession(ApplicationConstants.BASE_URL + ApplicationConstants.SIGNUP_URL, userModel)
    .then(response => {
      dispatch({ type: ActionConstants.SIGNUP_LOADER_STATUS, payload: false });
      dispatch({ type: ActionConstants.CLEAR_SIGNUP_INPUT_FIELDS });
      props.history.push('/');
    })
    .catch(err => {
      dispatch({ type: ActionConstants.SIGNUP_LOADER_STATUS, payload: false });
    });
}

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_SIGNUP_INPUT_FIELDS
  });
}