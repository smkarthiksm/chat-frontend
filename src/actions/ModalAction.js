import * as ActionConstants from "../constants/ActionConstants"
import * as UserApis from '../api/UserApi'
import * as ChatsApis from '../api/ChatsApi'
export const updateFields = (value) => dispatch => {
  dispatch({
    type: ActionConstants.UPDATE_DIRECT_MESSAGE_INPUTS,
    payload: value
  });
  searchByName(dispatch, value);
}

export const searchByName = async (dispatch, value) => {
  try {
    if (value) {
      const params = new URLSearchParams();
      params.append('name', value);
      dispatch({ type: ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS, payload: true });
      const response = await UserApis.searchByName(params)
      dispatch({ type: ActionConstants.DIRECT_MESSAGE_SEARCH_RESULT, payload: response });
      dispatch({ type: ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS, payload: false });
    }
    else {
      dispatch({ type: ActionConstants.DIRECT_MESSAGE_SEARCH_RESULT, payload: [] });
    }
  }
  catch (err) {
    dispatch({ type: ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS, payload: false });
  }
};

export const clearInputFields = () => dispatch => {
  dispatch({
    type: ActionConstants.CLEAR_DIRECT_MESSAGE_INPUTS
  });
}

export const hideModal = () => dispatch => {
  dispatch({
    type: ActionConstants.DIRECT_MESSAGE_MODAL_VISIBILITY,
    payload: false
  });
  dispatch({
    type: ActionConstants.CLEAR_DIRECT_MESSAGE_INPUTS
  });
  dispatch({
    type: ActionConstants.CLEAR_LIST_DATA
  });
}

export const selectedElements = (value) => dispatch => {
  dispatch({
    type: ActionConstants.DIRECT_MESSAGE_MEMBERS_TO_BE_DISPLAYED,
    payload: value
  });
}

export const createNewDirectMessage = (members) => async (dispatch) => {
  try {
    let ids = [];
    members.forEach(element => {
      ids.push(element.id);
    });

    dispatch({
      type: ActionConstants.DIRECT_MESSAGE_BUTTON_LOADER_STATUS,
      payload: true
    });

    const chatIdResponse = await ChatsApis.createNewDirectMessage(ids);
    const response = await ChatsApis.getChatsAssociatedWithUser();
    dispatch({
      type: ActionConstants.DIRECT_MESSAGES_DATA,
      payload: response
    });

    dispatch({
      type: ActionConstants.HIGHLIGHT_SELECTED_CHAT,
      payload: chatIdResponse.chatId
    });

    dispatch({
      type: ActionConstants.DIRECT_MESSAGE_BUTTON_LOADER_STATUS,
      payload: false
    });

    dispatch({
      type: ActionConstants.DIRECT_MESSAGE_MODAL_VISIBILITY,
      payload: false
    });

    dispatch({
      type: ActionConstants.CLEAR_DIRECT_MESSAGE_INPUTS
    });

  }
  catch (err) {
    dispatch({
      type: ActionConstants.DIRECT_MESSAGE_BUTTON_LOADER_STATUS,
      payload: false
    });
  }
}