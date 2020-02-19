export const Types = {
  GET_REQUEST: 'playlistsDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistsDetails/GET_SUCCESS',
  SET_LOADING_FALSE: 'playlistsDetails/SET_LOADING_FALSE',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function playlistsDetails(state = INITIAL_STATE, action) {
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
  getPlaylistsDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getPlaylistsDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  setLoadingFalse: () => ({ type: Types.SET_LOADING_FALSE }),
};
