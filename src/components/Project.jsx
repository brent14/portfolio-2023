import React, { Suspense, useRef, useState } from "react";
import styles from "../sass/project.module.sass";
import browserBorder from "/browser-header-triangle.svg";
import playBtn from "/play-btn.svg";
import ReactPlayer from "react-player";

export default function Project({
  title,
  subtitle,
  description,
  role,
  technologies,
  video,
  images,
}) {
  const videoRef = useRef(null);

  const [isPlaying, setPlaying] = useState(false);
  const [isError, setError] = useState(false);
  const [isTouch, setTouch] = useState(false);

  // check if its playing not the error

  // remove error code below

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

  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>

      <h5>ROLE</h5>
      <p>
        <span>{role}</span>
      </p>
      <h5>TECH / FEATURE STACK</h5>
      <p className={styles.feature}>
        {technologies.map((tech, index) => (
          <React.Fragment key={index}>
            <span>{tech}</span>
            {index !== technologies.length - 1 && ", "}
          </React.Fragment>
        ))}
      </p>
      <div className={styles.examples}>
        {images.map((image, index) => (
          <div key={index} className={styles.website}>
            <img
              src={browserBorder}
              className={styles.browser}
              alt="browser border"
            />
            <img src={image.url} alt={image.alt} />
          </div>
        ))}

        <div className={styles.website}>
          <img
            src={browserBorder}
            className={styles.browser}
            alt="browser border"
          />
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
              url={video}
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

            <img
              src={playBtn}
              alt="play button"
              className={videoPlayBtnClass}
            />
          </div>
        </div>
      </div>
      <svg
        className={styles.projectBorder}
        width="113"
        height="23"
        viewBox="0 0 113 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9548 0.000222367L0 10.9575L10.9548 21.9148L21.9096 10.9575L10.9548 0.000222367Z"
          fill="black"
        />
        <path
          d="M56.404 0.516824L45.4492 11.4741L56.404 22.4314L67.3588 11.4741L56.404 0.516824Z"
          fill="black"
        />
        <path
          d="M101.853 0.516824L90.8984 11.4741L101.853 22.4314L112.808 11.4741L101.853 0.516824Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
