export const BASE_URL = "http://localhost:3000";
export const JWT = "JWT";

// Usermanagement route
export const USER_MANAGEMENT_PATH = "/auth";
export const SIGNUP_URL = `${USER_MANAGEMENT_PATH}/signup`;
export const LOGIN_URL = `${USER_MANAGEMENT_PATH}/login`;

// User route
export const USER_PATH = "/user";
export const FIND_BY_NAME_URL = `${USER_PATH}/byName`;

// Chats route
export const CHATS_PATH = "/chats";
export const CHATS_ASSOCIATED_WITH_USER_URL = `${CHATS_PATH}/getChats`;
export const CREATE_NEW_DIRECT_MESSAGE_URL = `${CHATS_PATH}/newDirectMessage`;
