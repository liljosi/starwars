import { createInstance } from './utils';
import { BASE_URL, routes } from './constants';

const getAllCharacters = async() => {
  const instance = createInstance(BASE_URL);
  try {
    const response = await instance.get(routes['CHARACTERS']);
    return response;
  }catch(err) {
    throw err;
  }
}

export { getAllCharacters };