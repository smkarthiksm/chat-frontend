import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isLoaderVisible: false,
  email: '',
  password: '',
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.LOGIN:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    case ActionConstants.UPDATE_LOGIN_INPUTS:
      return {
        ...state,
        [action.prop]: action.payload
      }
    case ActionConstants.CLEAR_LOGIN_INPUT_FIELDS:
      return {
        ...state,
        isLoaderVisible: false,
        email: '',
        password: '',
      }
    case ActionConstants.LOGIN_LOADER_STATUS:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    default:
      return state
  }
}