import * as Api from "./ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';

export const login = (userModel) => {
  return new Promise((resolve, reject) => {
    Api.getSession(ApplicationConstants.BASE_URL + ApplicationConstants.LOGIN_URL, userModel)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const signup = (userModel) => {
  return new Promise((resolve, reject) => {
    Api.getSession(ApplicationConstants.BASE_URL + ApplicationConstants.SIGNUP_URL, userModel)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};