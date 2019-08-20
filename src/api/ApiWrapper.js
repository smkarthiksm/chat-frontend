import axios from 'axios';

export const api = (url, payload) => {
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