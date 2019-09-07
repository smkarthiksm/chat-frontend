import * as ActionConstants from "../constants/ActionConstants"
import * as ChatsApis from '../api/ChatsApi'

export const showDirectMessageModal = () => dispatch => {
  dispatch({
    type: ActionConstants.DIRECT_MESSAGE_MODAL_VISIBILITY,
    payload: {
      title: 'Direct Message',
      value: true
    }
  });
}

export const highlightSelectedChat = (chatId) => dispatch => {
  dispatch({
    type: ActionConstants.HIGHLIGHT_SELECTED_CHAT,
    payload: chatId
  });
}

export const getRequiredData = () => dispatch => {
  getChatsAssociatedWithUser(dispatch);
}

export const getChatsAssociatedWithUser = async (dispatch) => {
  try {
    const response = await ChatsApis.getChatsAssociatedWithUser();
    dispatch({ type: ActionConstants.DIRECT_MESSAGES_DATA, payload: response });
    dispatch({ type: ActionConstants.FULL_SCREEN_LOADER_VISIBILITY, payload: false });
    return response;
  }
  catch (err) {
  };
}

// export const loadDirectMessages = (props) => dispatch => {
//   const userModel = new UserModel();
//   userModel.email = props.state.email;
//   userModel.password = props.state.password;
//   dispatch({ type: ActionConstants.LOGIN_LOADER_STATUS, payload: true });
//   Api.getSession(ApplicationConstants.BASE_URL + ApplicationConstants.LOGIN_URL, userModel)
//     .then(response => {
//       dispatch({ type: ActionConstants.LOGIN_LOADER_STATUS, payload: false });
//       dispatch({ type: ActionConstants.CLEAR_LOGIN_INPUT_FIELDS });
//       Utility.saveJWT(response);
//       props.history.push('/');
//     })
//     .catch(err => {
//       dispatch({ type: ActionConstants.LOGIN_LOADER_STATUS, payload: false });
//     });
// }