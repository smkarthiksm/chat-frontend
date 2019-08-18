import * as ActionConstants from "../constants/ActionConstants"
export const toggleLoginStatus = (loginStatus) => dispatch => {
  dispatch({
    type: ActionConstants.LOGIN_VISIBLE_ACTION,
    payload: !loginStatus
  })
}