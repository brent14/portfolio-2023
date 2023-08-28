import React, { Suspense, useRef, useState } from "react";
import styles from "../sass/project.module.sass";
import browserBorderLarge from "/browser-header-triangle.svg";
import browserBorderSmall from "/browser-header-triangle-300.svg";
import VideoPlayer from "./VideoPlayer.jsx";

export default function Project({
  title,
  subtitle,
  description,
  role,
  technologies,
  videos,
  images,
}) {
  const videoStyle300 = `
    ${styles.website} 
    ${styles.small}
  `;
  const videoStyle600 = `
    ${styles.website} 
    ${styles.large}
  `;

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
              src={browserBorderLarge}
              className={styles.browser}
              alt="browser border"
            />
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
        {videos.map((video, index) => (
          <div
            key={index}
            className={video.size == 300 ? videoStyle300 : videoStyle600}
          >
            <img
              src={video.size == 300 ? browserBorderSmall : browserBorderLarge}
              className={styles.browser}
              alt="browser border"
            />

            <VideoPlayer video={video} />
          </div>
        ))}
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
