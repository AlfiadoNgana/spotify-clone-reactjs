import { combineReducers } from 'redux';

import playlists from './playlist';
import playlistsDetails from './playlistDetails';
import error from './error';
import player from './player';

export default combineReducers({
  playlists,
  playlistsDetails,
  error,
  player,
});
