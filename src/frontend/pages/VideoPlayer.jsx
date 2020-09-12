import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

import toggleFullScreen from '../utils/funcs/fullScreen.js';

import VideoControls from '../components/VideoControls';

import '../assets/style/pages/VideoPlayer.scss';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.media = this.props.media.filter((media) => media._id == id)[0];
    this.state = {
      playing: false,
      played: 0,
      playedInSeconds: 0,
      volume: 1,
      isFullScreen: false,
      watching: false,
    };
    this.container = React.createRef();
    this.video = React.createRef();
    this.intervalID = 0;
    this.watchTimeOut = 0;
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleSeek = (e) => {
    this.video.current.seekTo(e.target.value, 'fraction');
    this.setState({
      ...this.state,
      played: e.target.value,
    });
  };

  handleVolume = (e) => {
    this.setState({
      ...this.state,
      volume: parseFloat(e.target.value),
    });
  };

  handleMute = () => {
    if (!this.state.volume) {
      this.setState({
        ...this.state,
        volume: 1,
      });
    } else {
      this.setState({
        ...this.state,
        volume: 0,
      });
    }
  };

  handleTogglePlay = () => {
    if (!this.state.playing) {
      this.setState({
        ...this.state,
        playing: true,
        duration: this.video.current.getDuration(),
      });

      this.intervalID = setInterval(() => {
        this.setState({
          ...this.state,
          played: this.video.current.getCurrentTime() / this.state.duration,
          playedInSeconds: this.video.current.getCurrentTime(),
        });
      }, 200);

      this.watchTimeOut = setTimeout(() => {
        this.setState({ ...this.state, watching: true });
      }, 2000);
    } else {
      clearInterval(this.intervalID);
      clearTimeout(this.watchTimeOut);
      this.setState({
        ...this.state,
        watching: false,
        playing: false,
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleFullScreen = (e) => {
    toggleFullScreen(this.container.current);
    this.setState({
      ...this.state,
      isFullScreen: !this.state.isFullScreen,
    });
  };

  handleEnd = () => {
    this.setState({
      ...this.state,
      playing: false,
    });
  };

  handleMouseMove = () => {
    clearTimeout(this.watchTimeOut)
    this.setState({ ...this.state, watching: false });
    if (this.state.playing) {
      this.watchTimeOut = setTimeout(() => {
        this.setState({ ...this.state, watching: true });
      }, 2000);
    }
  };

  render() {
    const {
      playing,
      played,
      volume,
      duration,
      isFullScreen,
      watching,
    } = this.state;
    return (
      <div
        className={`videoPlayer ${watching && 'watching'}`}
        ref={this.container}
        onMouseMove={this.handleMouseMove}
      >
        {!watching && (
          <>
            <p onClick={this.handleGoBack} className='videoPlayer_goBack'>
              ⬅ Go Home
            </p>
            <h1 className='videoPlayer_name'>{this.media.name}</h1>
            <VideoControls
              {...this.state}
              handler={{
                play: this.handleTogglePlay,
                fullScreen: this.handleFullScreen,
                volume: this.handleVolume,
                mute: this.handleMute,
                seek: this.handleSeek,
              }}
            />
          </>
        )}
        <ReactPlayer
          ref={this.video}
          className='videoPlayer_player'
          url={this.media.src}
          playing={playing}
          pip={false}
          volume={volume}
          onEnded={this.handleEnd}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const series = [];
  state.media.series.forEach((serie) =>
    serie.seasons.forEach((season) =>
      season.episodes.forEach((episode) => series.push(episode))
    )
  );
  return {
    media: state.media.movies.concat(series),
  };
};

export default connect(mapStateToProps, null)(VideoPlayer);
