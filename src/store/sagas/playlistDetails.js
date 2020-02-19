import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { creators as PlaylistsDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistsDetails(action) {
  try {
    const { data } = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );

    yield put(PlaylistsDetailsActions.getPlaylistsDetailsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
