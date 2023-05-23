varying vec2 vUv;
uniform sampler2D u_tex1;
uniform sampler2D u_tex2;

uniform vec3 u_ColorMap[10];

void main()
{

    vec4 _t_halftone = texture2D(u_tex1, vUv); 
    vec3 halftoneColor = u_ColorMap[5];
    vec3 halftoneColorBase = u_ColorMap[5];
    vec3 normalColor = u_ColorMap[3];

    // COLORIZE THE HALFTONE TEXTURE
    // ##########################################
    gl_FragColor = vec4(halftoneColor.xyz, _t_halftone.a);
    // ##########################################
    // ##########################################

    // COLORIZE THE HALFTONE BASED ON ALPHA
    // ##########################################
    // if (_t_halftone.a <= float(0.1)) {
    //       gl_FragColor = vec4(halftoneColorBase.xyz, 1.0); 
    // } 
    // ##########################################
    // ##########################################



    //  gl_FragColor = vec4(_t_halftone); 
    // gl_FragColor = vec4(halftoneColorBase, 1.0);

    // ##########################################
    // ##########################################

}
