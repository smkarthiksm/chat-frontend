import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  isLoaderVisible: true,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.FULL_SCREEN_LOADER_VISIBILITY:
      return {
        ...state,
        isLoaderVisible: action.payload
      }
    default:
      return state
  }
}