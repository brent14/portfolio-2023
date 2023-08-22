import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import WorkSection from "./components/WorkSection.jsx";

export default function OnePage(props) {
  return (
    <>
      <Navigation />
      <Hero />
      <WorkSection />
    </>
  );
}
