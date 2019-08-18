import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isLoginVisible: true
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.LOGIN_VISIBLE_ACTION:
      return {
        ...state,
        isLoginVisible: action.payload
      }
    default:
      return state
  }
}