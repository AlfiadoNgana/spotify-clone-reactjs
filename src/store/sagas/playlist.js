import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { creators as PlaylistsActions } from '../ducks/playlist';

export function* getPlaylists() {
  try {
    const { data } = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
