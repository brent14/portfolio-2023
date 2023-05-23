varying vec2 vCustomUV;
varying vec3 vModelNormal;

uniform sampler2D u_tex1;
uniform sampler2D u_tex2;

uniform vec3 u_ColorMap[9];

void main()
{

    vec4 _t_halftone = texture2D(u_tex1, vCustomUV); 
    vec3 halftoneColor = u_ColorMap[2];
    vec3 halftoneColorBase = u_ColorMap[4];
    vec3 normalColor = u_ColorMap[3];

    // COLORIZE THE HALFTONE TEXTURE
    // ##########################################
    // gl_FragColor = vec4(halftoneColor, _t_halftone.a);
    // ##########################################
    // ##########################################

    // COLORIZE THE HALFTONE BASED ON ALPHA
    // ##########################################
    if (_t_halftone.a <= float(0.1)) {
          gl_FragColor = vec4(halftoneColorBase.xyz, 1.0); 
    } 
    // ##########################################
    // ##########################################

    // NORMAL MAP OF MODEL
    // ##########################################
    vec3 normal = normalize(vModelNormal);
    // target normals facing up (0.5 to get rid of faces that are facing up and shouldnt be in the model)
    if (normal.y > 0.70 ) {
        gl_FragColor = vec4(normalColor, (1.0 - _t_halftone.a));  
    } 

      if (normal.y < -0.70 ) {
        gl_FragColor = vec4(normalColor, (1.0 - _t_halftone.a));  
    } 
    // ##########################################
    // ##########################################

}
