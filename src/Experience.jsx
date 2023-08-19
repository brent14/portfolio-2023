import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./components/Portfolio.jsx";
import Navigation from "./components/Navigation.jsx";

export default function Experience() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(false);
    // Simulate a loading delay
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader progress={progress} />
      ) : (
        <>
          <Navigation />
          <Canvas
            camera={{
              fov: 45,
              near: 0.1,
              far: 1000,
              position: [0, 4, 10],
            }}
          >
            <Portfolio />
          </Canvas>
        </>
      )}
    </>
  );
}

const Loader = ({ progress }) => {
  return (
    <div className="loader">
      <span>Loading...</span>
      <span>{progress}</span>
    </div>
  );
};
