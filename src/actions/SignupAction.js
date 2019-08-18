import * as ActionConstants from "../constants/ActionConstants"
export const toggleSignupStatus = (signupStatus) => dispatch => {
  dispatch({
    type: ActionConstants.SIGNUP_VISIBLE_ACTION,
    payload: !signupStatus
  })
}