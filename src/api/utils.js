import axios from 'axios';

const createInstance = (URL) => {
  const instance = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    timeout: 3000,
  })
  return instance;
};

export { createInstance };