import { forwardRef, useMemo, useRef } from "react";
import { useTexture, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { textureAnimShader } from "../materials/textureAnimShader";
import { useFrame } from "@react-three/fiber";
import { BufferAttribute } from "three";

export const NameAnim = forwardRef((props, ref) => {
  const mesh = useRef();
  const meshTree = useRef();
  const materialRef = useRef();

  const { nodes } = useGLTF("/brent-carlin-front-end-developer.glb");

  console.log("nodes", nodes);

  const [texture1, texture2] = useTexture([
    "/halftone-rough-4x.png",
    "/halftone-rough-4x.png",
  ]);

  useFrame((state) => {
    const { clock } = state;
    const uvIndex = Math.floor(clock.elapsedTime / 0.075) % 5; // cycle through 5
    uvTextureAnim(uvIndex);
  });

  function uvTextureAnim(uvIndex) {
    // console.log("uvIndex", uvIndex);
    let u_uvTexture;
    // const geometry = nodes.Cube.geometry;
    const geometry = nodes.Text.geometry;

    // console.log("geometry", geometry);

    switch (uvIndex) {
      case 0:
        u_uvTexture = geometry.attributes["uv"].array;
        break;
      case 1:
        u_uvTexture = geometry.attributes["uv1"].array;
        break;
      case 2:
        u_uvTexture = geometry.attributes["uv2"].array;
        break;
      case 3:
        u_uvTexture = geometry.attributes["uv3"].array;
        break;
      case 4:
        u_uvTexture = geometry.attributes["texcoord_4"].array;
        break;
      default:
        u_uvTexture = geometry.attributes["uv"].array;
    }

    if (!u_uvTexture) {
      return;
    }

    const customTexCoords = u_uvTexture;
    const customTexCoordsArray = new Float32Array(customTexCoords);
    const customTexCoordsAttribute = new BufferAttribute(
      customTexCoordsArray,
      2
    );
    geometry.setAttribute("customUV", customTexCoordsAttribute);
  }

  const geometry = nodes.Text.geometry;

  // add modelNormal to attributes
  const modelNormal = geometry.attributes["normal"].array;
  const modelNormalArray = new Float32Array(modelNormal);
  const modelNormalAttribute = new BufferAttribute(modelNormalArray, 3);
  geometry.setAttribute("modelNormal", modelNormalAttribute);

  // add uniforms and props to the shaderMaterial
  const uniforms = useMemo(
    () => ({
      u_uvDex: { value: 0 },
      u_time: { value: 0.0 },
      u_tex1: { value: texture1 },
      u_tex2: { value: texture2 },
      u_ColorMap: {
        value: [
          new THREE.Color("#1fffd4"),
          new THREE.Color("#31ff31"),
          new THREE.Color("#18daef"),
          new THREE.Color("#f7e32b"),
          new THREE.Color("#ffff00"),
          new THREE.Color("#17a56f"),
          new THREE.Color("#bdff06"),
          new THREE.Color("#99ff99"),
          new THREE.Color("#59b5ac"),
        ],
      },
    }),
    []
  );

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        ref={meshTree}
        castShadow
        receiveShadow
        geometry={geometry}
        position={[0.0, 0.0, 0.0]}
      >
        <shaderMaterial
          attach="material"
          transparent
          ref={materialRef}
          side={THREE.DoubleSide}
          {...textureAnimShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
});

useGLTF.preload("/brent-carlin-front-end-developer.glb");

export default NameAnim;
