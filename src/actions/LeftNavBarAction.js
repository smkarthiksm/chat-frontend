import * as ActionConstants from "../constants/ActionConstants"

export const showDirectMessageModal = () => dispatch => {
  dispatch({
    type: ActionConstants.DIRECT_MESSAGE_MODAL_VISIBILITY,
    payload: {
      title: 'Direct Message',
      value: true
    }
  });
}