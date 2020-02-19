import { combineReducers } from 'redux';

import playlists from './playlist';
import playlistsDetails from './playlistDetails';

export default combineReducers({
  playlists,
  playlistsDetails,
});
