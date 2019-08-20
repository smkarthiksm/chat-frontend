import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isLoaderVisible: false,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  retypePassword: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.SIGNUP:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    case ActionConstants.UPDATE_SIGNUP_INPUTS:
      return {
        ...state,
        [action.prop]: action.payload
      }
    case ActionConstants.CLEAR_INPUT_FIELDS:
      return {
        ...state,
        isLoaderVisible: false,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        retypePassword: ''
      }
    case ActionConstants.LOADER_STATUS:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    default:
      return state
  }
}