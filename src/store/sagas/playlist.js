import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { creators as PlaylistsActions } from '../ducks/playlist';
import { creators as ErrorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const { data } = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(data));
  } catch (error) {
    yield put(ErrorActions.setError('Nao foi possivel carregar as playlists'));
    yield put(PlaylistsActions.setLoadingFalse());
  }
}
