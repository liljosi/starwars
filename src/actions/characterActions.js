import { GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAILURE, SHOW_MORE, SHOW_LESS } from './types';

const fetchCharacters = () => {
  console.log('action to fetch')
  return {
    type: GET_CHARACTERS,
  }
};

const getCharactersSuccess = (characters) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: characters,
  }
};

const getCharactersFailure = (error) => {
    return {
      type: GET_CHARACTERS_FAILURE,
      payload: error,
    }
  };

const showMore = (character) => {
  return {
    type: SHOW_MORE,
    payload: character,
  }
};

const showLess = () => {
  return {
    type: SHOW_LESS,
  }
};

export {
  fetchCharacters,
  getCharactersSuccess,
  getCharactersFailure,
  showMore,
  showLess
};