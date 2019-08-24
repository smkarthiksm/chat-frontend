import * as ActionConstants from "../constants/ActionConstants"
import * as Api from "../api/ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';
import UserModel from '../models/UserModel';
import * as Utility from '../utilities/Utility';

export const updateFields = (value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_DIRECT_MESSAGE_INPUTS,
    payload: value
  });
  search(dispatch, value);
}

export const search = (dispatch, value) => {
  if (value) {
    const params = new URLSearchParams();
    params.append('name', value);
    dispatch({ type: ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS, payload: true });
    Api.getApi(ApplicationConstants.BASE_URL + ApplicationConstants.FIND_BY_NAME_URL, { name: value })
      .then(response => {
        dispatch({ type: ActionConstants.DIRECT_MESSAGE_SEARCH_RESULT, payload: response });
        dispatch({ type: ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS, payload: false });
      })
      .catch(err => {
        dispatch({ type: ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS, payload: false });
      });
  }
  else {
    dispatch({ type: ActionConstants.DIRECT_MESSAGE_SEARCH_RESULT, payload: [] });
  }
}

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_DIRECT_MESSAGE_INPUTS
  });
}