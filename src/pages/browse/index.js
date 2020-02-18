import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creators as PlaylistsActions } from '../../store/ducks/playlist';

import { Container, Title, List, PlayList } from './styles';

class Browse extends Component {
  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          {playlists.data.map(playlist => (
            <PlayList to={`/playlists/${playlist.id}`} key={playlist.id}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </PlayList>
          ))}
        </List>
      </Container>
    );
  }
}

Browse.propTypes = {
  getPlaylistsRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
