import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isSignupVisible: true
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.SIGNUP_VISIBLE_ACTION:
      return {
        ...state,
        isSignupVisible: action.payload
      }
    default:
      return state
  }
}