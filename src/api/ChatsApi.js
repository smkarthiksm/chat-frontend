import * as Api from "./ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';

export const getChatsAssociatedWithUser = () => {
  return new Promise((resolve, reject) => {
    Api.get(ApplicationConstants.BASE_URL + ApplicationConstants.CHATS_ASSOCIATED_WITH_USER_URL)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const createNewDirectMessage = (payload) => {
  return new Promise((resolve, reject) => {
    Api.post(ApplicationConstants.BASE_URL + ApplicationConstants.CREATE_NEW_DIRECT_MESSAGE_URL, payload)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getChatMessages = (params) => {
  return new Promise((resolve, reject) => {
    Api.get(ApplicationConstants.BASE_URL + ApplicationConstants.CHAT_MESSAGES_URL, params)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const sendNewMessage = (payload) => {
  console.log(payload);
  
  return new Promise((resolve, reject) => {
    Api.post(ApplicationConstants.BASE_URL + ApplicationConstants.NEW_MESSAGE_URL, payload)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};