import * as ActionConstants from "../constants/ActionConstants"
import * as ChatsApi from '../api/ChatsApi'

export const updateField = (value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_NEW_MESSAGE_INPUT,
    payload: value
  });
}

export const getChatMessages = (chatId) => async (dispatch) => {
  try {
    const params = new URLSearchParams();
    params.append('chatId', chatId);
    dispatch({ type: ActionConstants.CHAT_LOADER_STATUS, payload: true });
    const response = await ChatsApi.getChatMessages(params);
    dispatch({ type: ActionConstants.CHAT_MESSAGES_DATA, payload: response });
    dispatch({ type: ActionConstants.CHAT_LOADER_STATUS, payload: false });
    dispatch({ type: ActionConstants.SCROLL_TO_BOTTOM, payload: true });
  }
  catch (err) {
    dispatch({ type: ActionConstants.CHAT_LOADER_STATUS, payload: false });
  }
};

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_LOGIN_INPUT_FIELDS
  });
}