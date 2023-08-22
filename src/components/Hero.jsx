import React, { Suspense } from "react";
import styles from "../sass/hero.module.sass";

// heroSection react export function
export default function Hero(props) {
  return (
    <>
      <header>
        <div className={styles.heroSection}>
          <svg
            width="401"
            height="410"
            viewBox="0 0 401 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.faceLight}
              d="M8.22894 200.545C8.22894 248.991 36.8461 286.028 67.4692 318.899C101.118 355.019 142.534 384.652 195.825 384.652C246.04 384.652 287.65 358.009 320.89 325.476C355.032 292.06 390.003 252.067 390.003 200.547C390.003 149.027 383.58 98.2211 350.509 59.1802C314.308 16.4377 258.359 0 199.117 0C143.167 0 77.3429 19.7261 41.1399 62.4645C10.673 98.4338 8.22894 149.706 8.22894 200.545Z"
            />
            <path
              d="M200.555 384.866L400.555 199.52C400.555 252.776 397.994 306.483 366.071 344.16C328.14 388.929 259.174 409.592 200.555 409.592C138.486 409.592 79.8663 392.373 41.9346 347.604C7.28456 306.706 0.555054 252.774 0.555054 199.52L200.555 384.866Z"
              className={styles.faceDark}
            />
            <path
              d="M198.637 235.92L83.0491 343.405C83.0491 312.522 84.5289 281.377 102.979 259.527C124.9 233.564 164.757 221.583 198.637 221.583C234.509 221.583 268.387 231.569 290.31 257.531C310.334 281.247 314.224 312.524 314.224 343.405L198.637 235.92Z"
              className={styles.faceDark}
            />
            <path
              d="M187.771 318.465C174.845 318.465 161.761 315.054 151.155 304.525L162.734 293.03C179.118 309.293 206.347 300.425 224.361 294.555C231.329 292.287 236.362 290.647 240.337 290.647L240.363 306.906C238.809 306.962 233.629 308.65 229.466 310.004C218.956 313.425 203.479 318.465 187.769 318.465H187.771Z"
              className={styles.faceDark}
            />
            <path
              d="M260.323 128.767L244.921 144.172L260.323 159.576L275.724 144.172L260.323 128.767Z"
              className={styles.faceDark}
            />
            <path
              d="M290.554 129.456C288.03 129.456 284.44 128.278 279.469 126.648C266.164 122.282 243.891 114.976 230.382 128.493L225.729 123.839C242.101 107.464 266.777 115.558 281.521 120.394C285.409 121.67 289.084 122.874 290.556 122.874V129.454L290.554 129.456Z"
              className={styles.faceDark}
            />
            <path
              d="M114.177 142.394L129.578 157.799L144.979 142.394L129.578 126.99L114.177 142.394Z"
              className={styles.faceDark}
            />
            <path
              d="M99.3485 127.68V121.1C100.82 121.1 104.496 119.895 108.384 118.62C123.128 113.782 147.805 105.685 164.175 122.065L159.523 126.719C146.009 113.198 123.738 120.506 110.435 124.873C105.465 126.504 101.872 127.682 99.3505 127.682L99.3485 127.68Z"
              className={styles.faceDark}
            />
            <path
              d="M193.559 211.031C185.233 202.594 189.337 189.908 191.545 183.094C192.002 181.679 192.574 179.917 192.604 179.376L199.116 179.407C199.116 180.869 198.536 182.665 197.732 185.15C195.715 191.381 192.668 200.794 198.163 206.364L193.557 211.031H193.559Z"
              className={styles.faceDark}
            />
          </svg>

          <div className={styles.heroSection__text}>
            <h1>
              BRENT CARLIN <br /> FRONT END ENGINEER
            </h1>
            <p>
              I have 13 years of experience working with cross-functional teams
              to create websites and digital experiences for local and global
              brands.
            </p>
            <div className={styles.heroSection__button}>
              <a href="mailto:brentcarlin@me.com">GET IN TOUCH</a>
            </div>
          </div>

          <div className={styles.heroSection__button_mobile}>
            <a href="mailto:brentcarlin@me.com">GET IN TOUCH</a>
          </div>
        </div>
      </header>
    </>
  );
}
