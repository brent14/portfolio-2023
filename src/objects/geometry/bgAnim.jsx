import { forwardRef, useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GradientAnimShader } from "../materials/gradientAnimShader";

export const BgAnim = forwardRef((props, ref) => {
  const materialRef = useRef();

  const [texture1, texture2] = useTexture([
    "/halftone-rough-4x.png",
    "/halftone-rough-4x.png",
  ]);

  useFrame((state) => {
    const { clock } = state;
    materialRef.current.uniforms.u_time.value = clock.elapsedTime;
  });

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      uBigWavesElevation: { value: 0.2 },
      uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
      uBigWavesSpeed: { value: 2.75 },
      uSmallWavesElevation: { value: 0.75 },
      uSmallWavesFrequency: { value: 2 },
      uSmallWavesSpeed: { value: 0.4 },
      uSmallIterations: { value: 1.5 },
      uDepthColor: { value: new THREE.Color("#18daef") },
      uSurfaceColor: { value: new THREE.Color("#ffff00") },
      u_tex1: { value: texture1 },
      u_tex2: { value: texture2 },
      uColorMap: {
        value: [
          new THREE.Color("#1fffd4"),
          new THREE.Color("#31ff31"),
          new THREE.Color("#17a56f"),
          new THREE.Color("#18daef"),
          new THREE.Color("#99ff99"),
          new THREE.Color("#ffff00"),
          new THREE.Color("#59b5ac"),
          new THREE.Color("#f7e32b"),
          new THREE.Color("#bdff06"),
          new THREE.Color("#ffffff"),
        ],
      },
      uColorOffset: { value: 0.08 },
      uColorMultiplier: { value: 1.75 },
    }),
    []
  );

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh receiveShadow>
        <planeGeometry args={[20, 20, 512, 512]} />
        <shaderMaterial
          attach="material"
          ref={materialRef}
          {...GradientAnimShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
});

export default BgAnim;

// rotation={[-Math.PI / 2, 0, 0]}
