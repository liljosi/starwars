import { all, takeLatest } from 'redux-saga/effects';
import { GET_CHARACTERS } from '../actions/types';
import { getCharacters } from './charactersSaga'; 

export default function* root () {
  yield all([
    takeLatest(GET_CHARACTERS, getCharacters )
  ]);
}