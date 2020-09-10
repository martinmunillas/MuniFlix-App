import React from 'react';

import '../assets/style/components/VideoControls.scss';

const videoControls = (props) => {
  const {
    playing,
    played,
    playedInSeconds,
    volume,
    duration,
    isFullScreen,
    handler,
  } = props;

  const getTime = () => {
    if (playedInSeconds > 3600) {
      const hours = Math.floor(playedInSeconds / 3600);
      const minutes = Math.floor((playedInSeconds - hours * 3600) / 60);
      const seconds = Math.floor(playedInSeconds - minutes * 60 - hours * 3600);

      return `${hours < 10 ? '0' + hours : hours}:${
        minutes < 10 ? '0' + minutes : minutes
      }:${seconds < 10 ? '0' + seconds : seconds}`;
    } else {
      const minutes = Math.floor(playedInSeconds / 60);
      const seconds = Math.floor(playedInSeconds - minutes * 60);
      return `${minutes < 10 ? '0' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }`;
    }
  };

  return (
    <div className='videoPlayer_controls'>
      <button
        onClick={handler.play}
        className='videoPlayer_controls-togglePlay'
      >
        <img src={playing ? '/images/pause.svg' : '/images/play.svg'} alt='' />
      </button>
      <p className='videoPlayer_controls-timer'>{getTime() || '00:00'}</p>
      <input
        type='range'
        name='seek'
        min='0'
        max='1'
        step='any'
        onChange={handler.seek}
        value={played || 0}
        className='videoPlayer_controls-seeker'
      />
      <div className='videoPlayer_controls-volume'>
        <button
          className='videoPlayer_controls-volume-mute'
          onClick={handler.mute}
        >
          <img src={!volume ? '/images/mute.svg' : '/images/sound.svg'} />
        </button>
        <input
          type='range'
          name='volume'
          min='0'
          max='1'
          step='any'
          onChange={handler.volume}
          value={volume}
          className='videoPlayer_controls-volume-volume'
        />
      </div>
      <button
        onClick={handler.fullScreen}
        className='videoPlayer_controls-fullScreen'
      >
        <img
          src={
            isFullScreen
              ? '/images/fullScreen.svg'
              : '/images/notFullScreen.svg'
          }
          alt=''
        />
      </button>
    </div>
  );
};

export default videoControls;
