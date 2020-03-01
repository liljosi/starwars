import { call, put } from 'redux-saga/effects';
import { getAllCharacters } from '../api/characters';
import { getCharactersSuccess, getCharactersFailure } from '../actions/characterActions';

function* getCharacters(action) {
  try {
    const response = yield call(getAllCharacters)
    const { data } = response;
    const { results } = data;
    const characters = results;
    yield put(getCharactersSuccess(characters))
  }catch(err) {
    yield put(getCharactersFailure(err))
  }
}

export {
  getCharacters,
}
