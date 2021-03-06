import axios from 'axios';
import * as Utility from '../utilities/Utility';

export const get = (url, queryParams) => {
  const jwt = getJWT();
  let config = {
    headers: jwt ? { "authorization": jwt } : null,
    params: queryParams,
  }
  return new Promise((resolve, reject) => {
    axios.get(url, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  });
};

export const post = (url, payload) => {
  const jwt = getJWT();
  let config = {
    headers: jwt ? { "authorization": jwt } : null,
  }
  return new Promise((resolve, reject) => {
    axios.post(url, payload, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  });
};

export const getSession = (url, payload) => {
  return new Promise((resolve, reject) => {
    axios.post(url, payload)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  });
};

export const getJWT = () => {
  return Utility.getJWT();
}