import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "../sass/navigation.module.sass";
import { Github, Linkedin, Twitter } from "grommet-icons";

export default function Navigation(props) {
  return (
    <section {...props}>
      <ul>
        <li>
          <a href="https://github.com/brent14" target="_blank">
            <Github size="medium" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brent-carlin/" target="_blank">
            <Linkedin size="medium" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ghost_habanero" target="_blank">
            <Twitter size="medium" />
          </a>
        </li>
      </ul>
      <ul {...props}>
        <li>{/* <Link to="/">Home</Link> */}</li>
        <li>{/* <Link to="/portfolio">Portfolio</Link> */}</li>
        <li>{/* <Link to="/sketches">sketches</Link> */}</li>
      </ul>
    </section>
  );
}
