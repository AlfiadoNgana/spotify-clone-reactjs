import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlist';

import { getPlaylists } from './playlist';

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
}
