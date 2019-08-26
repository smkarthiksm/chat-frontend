import * as ActionConstants from "../constants/ActionConstants"
const initialState = {
  listData: [],
  membersToBeDisplayed: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionConstants.LIST_DATA:
      return {
        ...state,
        listData: action.payload
      }
    case ActionConstants.CLEAR_LIST_DATA:
      return {
        ...state,
        listData: [],
        membersToBeDisplayed: []
      }
    case ActionConstants.MEMBERS_TO_BE_ADDED_LIST_DATA:
      return {
        ...state,
        membersToBeDisplayed: action.payload
      }
    default:
      return state
  }
}