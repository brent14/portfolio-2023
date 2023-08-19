import React, { Suspense, useRef, useState } from "react";
import styles from "../sass/work.module.sass";
import Project from "./Project.jsx";
import workProjects from "../data/work-projects.json";

export default function WorkSection(props) {
  return (
    <section id="work">
      <svg
        className={styles.sectionBorder}
        width="395"
        height="44"
        viewBox="0 0 395 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M109.211 -4.53746e-05L88 21.2156L109.211 42.4312L130.422 21.2156L109.211 -4.53746e-05Z"
          fill="black"
        />
        <path
          d="M21.2108 0.999955L0 22.2156L21.2108 43.4312L42.4216 22.2156L21.2108 0.999955Z"
          fill="black"
        />
        <path
          d="M197.211 0.999955L176 22.2156L197.211 43.4312L218.422 22.2156L197.211 0.999955Z"
          fill="black"
        />
        <path
          d="M285.211 0.999955L264 22.2156L285.211 43.4312L306.422 22.2156L285.211 0.999955Z"
          fill="black"
        />
        <path
          d="M373.211 0.999955L352 22.2156L373.211 43.4312L394.422 22.2156L373.211 0.999955Z"
          fill="black"
        />
      </svg>
      <h2>WORK</h2>
      {workProjects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          role={project.role}
          technologies={project.technologies}
          video={project.video}
          images={project.images}
        />
      ))}
    </section>
  );
}
