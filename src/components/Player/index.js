import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}

    <Current>
      <img
        src="https://dopemusicpromotions.com/wp-content/uploads/2019/06/Stargroves-album-cover.png"
        alt="Musica Currente"
      />
      <div>
        <span>Times like theses</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="backward" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="play" />
        </button>
        <button type="button">
          <img src={PauseIcon} alt="pause" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:29</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
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
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
