import { Color, BoxGeometry } from "three";
import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import styles from "../sass/home.module.sass";
import BasicMaterial from "../objects/materials/basicMaterial";
import NameAnim from "../objects/geometry/nameAnim";

export default function Experience() {
  const cube = useRef();
  const sphere = useRef();
  const boRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <spotLight intensity={1.0} position={[0, 5, 10]} castShadow />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <NameAnim position={[-3.0, 1.0, 0.0]} />
      {/* <mesh position-x={0}>
        <planeGeometry />
        <MeshReflectorMaterial
          color={new Color("#31ff31").convertLinearToSRGB()}
        />
      </mesh> */}
    </>
  );
}
