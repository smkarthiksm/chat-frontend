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
  toggleLoaderStatus(true);
  Api.api(ApplicationConstants.BASE_URL + ApplicationConstants.SIGNUP_URL, userModel)
    .then(response => {
      toggleLoaderStatus(false);
      clearInputFields();
      props.history.push('/');
    })
    .catch(err => {
      toggleLoaderStatus(false);
    });

}

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_INPUT_FIELDS
  });
}

export const toggleLoaderStatus = (status) => dispatch => {
  dispatch({
    type: ActionConstants.LOADER_STATUS,
    payload: status
  });
}