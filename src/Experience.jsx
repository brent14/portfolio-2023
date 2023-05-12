import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./components/Portfolio.jsx";
import Navigation from "./components/Navigation.jsx";

export default function Experience() {
  return (
    <>
      <Navigation />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5],
        }}
      >
        <Portfolio />
      </Canvas>
    </>
  );
}
