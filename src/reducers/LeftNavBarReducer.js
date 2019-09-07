import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  directMessages: [],
  channels: [],
  selectedChatId: -1
}
export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ActionConstants.DIRECT_MESSAGES_DATA:
      return {
        ...state,
        directMessages: action.payload
      }
    case ActionConstants.CHANNELS_DATA:
      return {
        ...state,
        channels: action.payload
      }
    case ActionConstants.HIGHLIGHT_SELECTED_CHAT:
      return {
        ...state,
        selectedChatId: action.payload
      }
    default:
      return state
  }
}