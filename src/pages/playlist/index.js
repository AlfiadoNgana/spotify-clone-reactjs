/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creators as PlaylistsDetailsActions } from '../../store/ducks/playlistDetails';
import { creators as PlayerActions } from '../../store/ducks/player';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import { Container, Header, SongList, SongItem } from './styles';
import Loading from '../../components/loading';

class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      selectedSong: null,
    };
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    //temos que verificar se uma houve uma alteracao no parametro id
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id)
      this.loadPlaylistDetails();
  }

  loadPlaylistDetails() {
    const { match, getPlaylistsDetailsRequest } = this.props;
    const { id } = match.params;

    getPlaylistsDetailsRequest(id);
  }

  renderDetails = () => {
    const { playlistsDetails, loadSong } = this.props;

    return (
      <Container>
        <Header>
          <img
            src={playlistsDetails.data.thumbnail}
            alt={playlistsDetails.data.title}
          />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlistsDetails.data.title}</h1>
            {!!playlistsDetails.data.songs && (
              <p>{playlistsDetails.data.songs.length} Musicas</p>
            )}

            <button type="button">Play</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Titulo</th>
              <th>Artista</th>
              <th>Album</th>
              <th>
                <img src={ClockIcon} alt="Duracao" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlistsDetails.data.songs ? (
              <tr>
                <td colSpan={5}>Nao tem Musicas Adicionadas</td>
              </tr>
            ) : (
              playlistsDetails.data.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => loadSong(song)}
                  selected={this.state.selectedSong === song.id}
                  playing={
                    this.props.currentSong &&
                    this.props.currentSong.id === song.id
                  }
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { playlistsDetails } = this.props;
    return playlistsDetails.loading ? (
      <Container loading="true">
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

PlayList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getPlaylistsDetailsRequest: PropTypes.func.isRequired,
  playlistsDetails: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      description: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
        })
      ),
    }),
    loading: PropTypes.bool,
  }).isRequired,
  loadSong: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  playlistsDetails: state.playlistsDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...PlaylistsDetailsActions, ...PlayerActions },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
