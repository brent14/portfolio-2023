import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import vertex from "../shaders/basic/vertex.glsl";
import fragment from "../shaders/basic/fragment.glsl";

const BasicMaterial = shaderMaterial({}, vertex, fragment);

extend({ BasicMaterial });

export default BasicMaterial;
