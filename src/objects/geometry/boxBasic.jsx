import { forwardRef, useMemo } from "react";
import { BasicMaterial } from "../materials/basicShader";

export const BoxBasic = forwardRef((props, ref) => {
  // add uniforms and props to the shaderMaterial
  const uniforms = useMemo(() => ({}), []);

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh castShadow receiveShadow position={[0.0, 0.0, 0.0]}>
        <boxGeometry />
        <BasicMaterial attach="material" {...BasicShader} uniforms={uniforms} />
      </mesh>
    </group>
  );
});
