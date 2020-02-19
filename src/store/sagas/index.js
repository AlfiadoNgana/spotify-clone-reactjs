import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlist';
import { Types as PlaylistsDetailsTypes } from '../ducks/playlistDetails';

import { getPlaylists } from './playlist';
import { getPlaylistsDetails } from './playlistDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistsDetailsTypes.GET_REQUEST, getPlaylistsDetails),
  ]);
}
