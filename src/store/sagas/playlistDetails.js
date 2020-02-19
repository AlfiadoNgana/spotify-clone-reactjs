import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { creators as PlaylistsDetailsActions } from '../ducks/playlistDetails';
import { creators as ErrorActions } from '../ducks/error';

export function* getPlaylistsDetails(action) {
  try {
    const { data } = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );

    yield put(PlaylistsDetailsActions.getPlaylistsDetailsSuccess(data));
  } catch (error) {
    yield put(ErrorActions.setError('Nao foi possivel carregar a lista'));
    yield put(PlaylistsDetailsActions.setLoadingFalse());
  }
}
