import * as ApplicationConstants from '../constants/ApplicationConstants';

export const saveJWT = (JWT) => {
  localStorage.setItem(ApplicationConstants.JWT, JWT)
}

export const getJWT = () => {
  return localStorage.getItem(ApplicationConstants.JWT)
}