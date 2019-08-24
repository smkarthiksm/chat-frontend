import * as ApplicationConstants from '../constants/ApplicationConstants';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
export const saveJWT = (JWT) => {
  localStorage.setItem(ApplicationConstants.JWT, JWT)
}

export const getJWT = () => {
  return localStorage.getItem(ApplicationConstants.JWT)
}

export const validateJWT = () => {
  return moment.unix(jwt_decode(getJWT).exp) > moment();
}