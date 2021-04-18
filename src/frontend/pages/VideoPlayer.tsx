import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

import toggleFullScreen from "../utils/funcs/fullScreen";

import VideoControls from "../components/VideoControls";

import "../assets/style/pages/VideoPlayer.scss";
import { useHistory, useParams } from "react-router";

interface VideoPlayerProps {}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const medias: any[] = useSelector((state: any) => {
    const series: any[] = [];
    state.media.series.forEach((serie: any) =>
      serie.seasons.forEach((season: any) =>
        season.episodes.forEach((episode: any) => series.push(episode))
      )
    );
    return state.media.movies.concat(series);
  });
  const history = useHistory();
  const { id } = useParams<any>();
  const media = medias.find((media) => media._id == id);
  const [state, setState] = useState<any>({
    playing: false,
    played: 0,
    playedInSeconds: 0,
    volume: 1,
    isFullScreen: false,
    watching: false,
  });
  const container = useRef<HTMLDivElement>(null);
  const video = useRef<ReactPlayer>(null);
  const [intervalID, setIntervalID] = useState(0);
  const [watchTimeOut, setWatchTimeOut] = useState(0);

  useEffect(() => {
    () => clearInterval(intervalID);
  }, []);

  const handleGoBack = () => {
    // @ts-ignore
    history.goBack();
  };

  const handleSeek: ChangeEventHandler<HTMLInputElement> = (e) => {
    video.current?.seekTo(parseInt(e.target.value), "fraction");
    setState({
      ...state,
      played: e.target.value,
    });
  };

  const handleVolume: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState({
      ...state,
      volume: parseFloat(e.target.value),
    });
  };

  const handleMute = () => {
    if (!state.volume) {
      setState({
        ...state,
        volume: 1,
      });
    } else {
      setState({
        ...state,
        volume: 0,
      });
    }
  };

  const handleTogglePlay = () => {
    if (!video.current) return;
    if (!state.playing) {
      setState({
        ...state,
        playing: true,
        duration: video.current.getDuration(),
      });

      const intervalID = setInterval(() => {
        if (!video.current) return;
        setState({
          ...state,
          played: video.current.getCurrentTime() / state.duration,
          playedInSeconds: video.current.getCurrentTime(),
        });
      }, 200);

      // @ts-ignore
      setIntervalID(intervalID);

      const watchTimeOut = setTimeout(() => {
        setState({ ...state, watching: true });
      }, 2000);
      // @ts-ignore
      setWatchTimeOut(watchTimeOut);
    } else {
      clearInterval(intervalID);
      clearTimeout(watchTimeOut);
      setState({
        ...state,
        watching: false,
        playing: false,
      });
    }
  };

  const handleFullScreen = () => {
    if (!container.current) return;
    toggleFullScreen(container.current);
    setState({
      ...state,
      isFullScreen: !state.isFullScreen,
    });
  };

  const handleEnd = () => {
    setState({
      ...state,
      playing: false,
    });
  };

  const handleMouseMove = () => {
    clearTimeout(watchTimeOut);
    setState({ ...state, watching: false });
    if (state.playing) {
      const watchTimeOut = setTimeout(() => {
        setState({ ...state, watching: true });
      }, 2000);
      // @ts-ignore
      setWatchTimeOut(watchTimeOut);
    }
  };

  const { playing, volume, watching } = state;
  return (
    <div
      className={`videoPlayer ${watching && "watching"}`}
      ref={container}
      onMouseMove={handleMouseMove}
    >
      {!watching && (
        <>
          <p onClick={handleGoBack} className='videoPlayer_goBack'>
            ⬅ Go Home
          </p>
          <h1 className='videoPlayer_name'>{media.name}</h1>
          <VideoControls
            {...state}
            handler={{
              play: handleTogglePlay,
              fullScreen: handleFullScreen,
              volume: handleVolume,
              mute: handleMute,
              seek: handleSeek,
            }}
          />
        </>
      )}
      <ReactPlayer
        ref={video}
        className='videoPlayer_player'
        url={media.src}
        playing={playing}
        pip={false}
        volume={volume}
        onEnded={handleEnd}
      />
    </div>
  );
};

export default VideoPlayer;
