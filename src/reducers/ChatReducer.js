import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isLoaderVisible: false,
  chatMessagesData: [],
  scrollToBottom: false,
  newMessage: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.CHAT_LOADER_STATUS:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    case ActionConstants.CHAT_MESSAGES_DATA:
      return {
        ...state,
        chatMessagesData: action.payload,
      }
    case ActionConstants.SCROLL_TO_BOTTOM:
      return {
        ...state,
        scrollToBottom: action.payload,
      }
    case ActionConstants.UPDATE_NEW_MESSAGE_INPUT:
      return {
        ...state,
        newMessage: action.payload,
      }
    case ActionConstants.APPEND_NEW_CHAT_MESSAGES_DATA:
      state.chatMessagesData.messages.push(action.payload);
      return {
        ...state,
      }
    case ActionConstants.MARK_NEW_CHAT_MESSAGE_SENT:
      state.chatMessagesData.messages.pop();
      state.chatMessagesData.messages.push(action.payload);
      return {
        ...state
      }

    default:
      return state
  }
}