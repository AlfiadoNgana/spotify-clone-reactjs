import { combineReducers } from 'redux';

import playlists from './playlist';
import playlistsDetails from './playlistDetails';
import error from './error';

export default combineReducers({
  playlists,
  playlistsDetails,
  error,
});
