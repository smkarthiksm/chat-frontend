import * as Api from "./ApiWrapper";
import * as ApplicationConstants from '../constants/ApplicationConstants';

export const searchByName = (params) => {
  return new Promise((resolve, reject) => {
    Api.get(ApplicationConstants.BASE_URL + ApplicationConstants.FIND_BY_NAME_URL, params)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};