import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creators as PlayerAction } from '../../store/ducks/player';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from './style';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({
  player,
  play,
  pause,
  next,
  prev,
  playing,
  position,
  duration,
}) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing}
      />
    )}

    <Current>
      {!!player.currentSong && (
        <>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </>
      )}
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button type="button" onClick={prev}>
          <img src={BackwardIcon} alt="backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={pause}>
            <img src={PauseIcon} alt="pause" />
          </button>
        ) : (
          <button type="button" onClick={play}>
            <img src={PlayIcon} alt="play" />
          </button>
        )}
        <button type="button" onClick={next}>
          <img src={ForwardIcon} alt="forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>
      <Time>
        <span>{position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  playing: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

/**
 *
 * @param {milisegundos} ms
 */
function mlsToTime(mls) {
  let secounds = parseInt((mls / 1000) % 60, 10);
  const minutes = parseInt((mls / (1000 * 60)) % 60, 10);

  secounds = secounds < 10 ? `0${secounds}` : secounds;

  return `${minutes}:${secounds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: mlsToTime(state.player.position),
  duration: mlsToTime(state.player.duration),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
