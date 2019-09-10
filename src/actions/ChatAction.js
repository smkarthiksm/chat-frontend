import * as ActionConstants from "../constants/ActionConstants"
import * as ChatsApi from '../api/ChatsApi'
import * as Utility from '../utilities/Utility';

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

    response.messages.forEach(element => {
      element.isSent = true;
    });

    dispatch({ type: ActionConstants.CHAT_MESSAGES_DATA, payload: response });
    dispatch({ type: ActionConstants.CHAT_LOADER_STATUS, payload: false });
    dispatch({ type: ActionConstants.SCROLL_TO_BOTTOM, payload: true });
  }
  catch (err) {
    dispatch({ type: ActionConstants.CHAT_LOADER_STATUS, payload: false });
  }
};

export const sendNewMessage = (chatId, message) => async (dispatch) => {
  const body = {
    chatId: chatId,
    message: message
  }
  let payload = JSON.parse(JSON.stringify(body));
  let JWTPayload = Utility.decodeJWT();
  payload.firstName = JWTPayload.firstName;
  payload.lastName = JWTPayload.lastName;
  payload.userId = JWTPayload.id
  payload.id = 0;
  payload.isSent = false;
  try {
    dispatch({ type: ActionConstants.UPDATE_NEW_MESSAGE_INPUT, payload: '' });
    dispatch({ type: ActionConstants.APPEND_NEW_CHAT_MESSAGES_DATA, payload: payload });
    const response = await ChatsApi.sendNewMessage(body);

    payload.id = response.insertId;
    payload.isSent = true;

    dispatch({ type: ActionConstants.MARK_NEW_CHAT_MESSAGE_SENT, payload: payload });
  }
  catch (err) {
    dispatch({ type: ActionConstants.UPDATE_NEW_MESSAGE_INPUT, payload: '' });
  }
};


export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_LOGIN_INPUT_FIELDS
  });
}