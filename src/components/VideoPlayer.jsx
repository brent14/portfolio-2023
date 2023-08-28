import React, { Suspense, useRef, useState } from "react";
import styles from "../sass/project.module.sass";
import playBtn from "/play-btn.svg";
import ReactPlayer from "react-player";

export default function VideoPlayer({ video }) {
  const videoRef = useRef(null);

  const [isPlaying, setPlaying] = useState(false);
  const [isError, setError] = useState(false);
  const [isTouch, setTouch] = useState(false);

  const handleMouseEnter = () => {
    setPlaying(true);
    console.log("mouse enter" + isPlaying);
  };

  const handleTouch = () => {
    console.log("touch before " + isPlaying);
    setPlaying(!isPlaying);
    setTouch(true);
    console.log("touch after " + isPlaying);
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    console.log("mouse leave" + isPlaying);
  };

  const handleOnPause = () => {
    setPlaying(false);
    console.log("on pouse " + isPlaying);
  };

  const handleErrorPlayHover = (e) => {
    console.log("onError", e);
    setError(true);
  };

  // Conditional classes for error and playing state
  const videoPlayBtnClass = `
    ${styles.playBtn} 
    ${isPlaying ? styles.fadeOut : ""} 
    ${isTouch ? styles.hide : ""}
    ${!isPlaying ? styles.pause : ""}`;

  const videoPauseFilter = `
    ${styles.reactPlayer}  
    ${!isPlaying ? styles.pause : ""} `;

  const videoStyle300 = `
    ${styles.website} 
    ${styles.small}
  `;
  const videoStyle600 = `
    ${styles.website} 
    ${styles.large}
  `;

  return (
    <div
      className={styles.videoContainer}
      // onClick={handleTouch}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      <ReactPlayer
        width="100%"
        height="100%"
        ref={videoRef}
        playing={isPlaying}
        loop={true}
        controls={false}
        className={styles.reactPlayer}
        url={video.url}
        onPause={handleOnPause}
        // onPlay={() => console.log("onPlay")}
        // onReady={() => console.log("onReady")}
        // onStart={() => console.log("onStart")}
        onError={handleErrorPlayHover}
        // onSeek={(e) => console.log("onSeek", e)}
        // onBuffer={() => console.log("onBuffer")}
        muted={true}
        // onMouseEnter={handlePlay}
        // onMouseLeave={handleMouseLeave}
      />
      <img src={playBtn} alt="play button" className={videoPlayBtnClass} />
    </div>
  );
}
