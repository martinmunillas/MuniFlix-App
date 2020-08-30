import React from 'react'

import '../assets/style/components/VideoControls.scss';

const videoControls = (props) => {
  const {playing, played, volume, duration, isFullScreen, handler} = props
    return (
        <div className="videoPlayer_controls">
          <button
            onClick={handler.play}
            className="videoPlayer_controls-togglePlay"
          >
            <img src={playing ? '/images/pause.svg' : '/images/play.svg'} alt="" />
          </button>
          <input
            type="range"
            name="seek"
            min="0"
            max="1"
            step="any"
            onChange={handler.seek}
            value={played || 0}
            className="videoPlayer_controls-seeker"
          />
          <div className="videoPlayer_controls-volume">
            <button
              className="videoPlayer_controls-volume-mute"
              onClick={handler.mute}
            >
              <img src={!volume ? '/images/mute.svg' : '/images/sound.svg'}/>
            </button>
            <input
              type="range"
              name="volume"
              min="0"
              max="1"
              step="any"
              onChange={handler.volume}
              value={volume}
              className="videoPlayer_controls-volume-volume"
            />
          </div>
          <button
            onClick={handler.fullScreen}
            className="videoPlayer_controls-fullScreen"
          >
            <img src={isFullScreen ? '/images/fullScreen.svg' : '/images/notFullScreen.svg'} alt="" />
          </button>
        </div>
    )
}

export default videoControls