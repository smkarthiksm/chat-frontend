import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isButtonLoaderVisible: false,
  isDataLoaderVisible: false,
  searchValue: '',
  searchResponse: [],
  isModalVisible: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.DIRECT_MESSAGE_SEARCH_RESULT:
      return {
        ...state,
        searchResponse: action.payload
      }
    case ActionConstants.UPDATE_DIRECT_MESSAGE_INPUTS:
      return {
        ...state,
        searchValue: action.payload
      }
    case ActionConstants.CLEAR_DIRECT_MESSAGE_INPUTS:
      return {
        ...state,
        isButtonLoaderVisible: true,
        isDataLoaderVisible: false,
        searchValue: '',
        searchResponse: [],
        isModalVisible: false
      }
    case ActionConstants.DIRECT_MESSAGE_DATA_LOADER_STATUS:
      return {
        ...state,
        isDataLoaderVisible: action.payload
      }
    case ActionConstants.DIRECT_MESSAGE_BUTTON_LOADER_STATUS:
      return {
        ...state,
        isButtonLoaderVisible: action.payload
      }
    case ActionConstants.DIRECT_MESSAGE_MODAL_VISIBILITY:
      return {
        ...state,
        isModalVisible: action.payload
      }
    default:
      return state
  }
}