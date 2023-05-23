import { forwardRef, useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { overlayTextureShader } from "../materials/overlayTextureShader";

export const OverlayTexture = forwardRef((props, ref) => {
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
      u_tex1: { value: texture1 },
      u_tex2: { value: texture2 },
      u_ColorMap: {
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
    }),
    []
  );

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh receiveShadow>
        <planeGeometry args={[20, 20, 512, 512]} />
        <shaderMaterial
          transparent
          attach="material"
          ref={materialRef}
          {...overlayTextureShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
});

export default OverlayTexture;
