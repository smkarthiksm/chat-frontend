import * as ActionConstants from "../constants/ActionConstants"

export const addItem = (value) => dispatch => {
  dispatch({
    type: ActionConstants.DIRECT_MESSAGE_MEMBERS_TO_BE_DISPLAYED,
    payload: value
  });
}