export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
  SET_LOADING_FALSE: 'playlists/SET_LOADING_FALSE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.SET_LOADING_FALSE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  setLoadingFalse: () => ({ type: Types.SET_LOADING_FALSE }),
};
