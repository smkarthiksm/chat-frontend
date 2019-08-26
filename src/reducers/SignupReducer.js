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
    case ActionConstants.UPDATE_SIGNUP_INPUTS:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case ActionConstants.CLEAR_SIGNUP_INPUT_FIELDS:
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
    case ActionConstants.SIGNUP_LOADER_STATUS:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    default:
      return state
  }
}