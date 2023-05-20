import vertex from "../shaders/textureAnimShader/vertex.glsl";
import fragment from "../shaders/textureAnimShader/fragment.glsl";

// add textures to uniforms
export const textureAnimShader = {
  uniforms: {
    u_tex1: undefined,
    u_tex2: undefined,
    u_tex3: undefined,
    u_tex4: undefined,
    u_tex5: undefined,
    u_tex6: undefined,
    u_tex7: undefined,
    u_tex8: undefined,
    u_disp: undefined,
  },
  vertexShader: vertex,
  fragmentShader: fragment,
};
