import * as ActionConstants from "../constants/ActionConstants"
import * as AuthApis from '../api/AuthApi'
import UserModel from '../models/UserModel';

export const updateFields = (prop, value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_SIGNUP_INPUTS,
    payload: {
      prop: prop,
      value: value
    }
  });
}

export const signup = (props) => async (dispatch) => {
  try {
    const userModel = new UserModel(0, props.state.firstName, props.state.lastName, props.state.email, props.state.phoneNumber, props.state.password);
    dispatch({ type: ActionConstants.SIGNUP_LOADER_STATUS, payload: true });
    const response = await AuthApis.login(userModel)
    dispatch({ type: ActionConstants.SIGNUP_LOADER_STATUS, payload: false });
    dispatch({ type: ActionConstants.CLEAR_SIGNUP_INPUT_FIELDS });
    props.history.push('/');
  }
  catch (err) {
    dispatch({ type: ActionConstants.SIGNUP_LOADER_STATUS, payload: false });
  }
};

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_SIGNUP_INPUT_FIELDS
  });
}