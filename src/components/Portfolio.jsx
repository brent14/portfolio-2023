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
import { Perf } from "r3f-perf";
import styles from "../sass/home.module.sass";
import BasicMaterial from "../objects/materials/basicMaterial";
import NameAnim from "../objects/geometry/nameAnim";
import BgAnim from "../objects/geometry/bgAnim";
import OverlayTexture from "../objects/geometry/overlayTexture";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <spotLight intensity={1.0} position={[0, 5, 10]} castShadow />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <NameAnim position={[-3.0, 1.0, 0.5]} />
      <OverlayTexture position={[0.0, 1.0, -0.2]} />
      <BgAnim position={[0.0, 1.0, -0.5]} />
      {/* <Perf position="top-left" /> */}
    </>
  );
}
