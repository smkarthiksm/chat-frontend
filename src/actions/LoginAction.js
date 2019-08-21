import * as ActionConstants from "../constants/ActionConstants"
import * as Api from "../api/ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';
import UserModel from '../models/UserModel';
import * as Utility from '../utilities/Utility';

export const updateFields = (prop, value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_LOGIN_INPUTS,
    prop: prop,
    payload: value
  });
}

export const login = (props) => dispatch => {
  const userModel = new UserModel();
  userModel.email = props.state.email;
  userModel.password = props.state.password;
  toggleLoaderStatus(true);
  Api.api(ApplicationConstants.BASE_URL + ApplicationConstants.LOGIN_URL, userModel)
    .then(response => {
      toggleLoaderStatus(false);
      clearInputFields();
      Utility.saveJWT(response);
      props.history.push('/');
    })
    .catch(err => {
      toggleLoaderStatus(false);
    });

}

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_LOGIN_INPUT_FIELDS
  });
}

export const toggleLoaderStatus = (status) => dispatch => {
  dispatch({
    type: ActionConstants.LOGIN_LOADER_STATUS,
    payload: status
  });
}