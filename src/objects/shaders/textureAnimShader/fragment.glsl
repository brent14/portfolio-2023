varying vec2 vCustomUV;

uniform sampler2D u_tex1;
uniform sampler2D u_tex2;

void main()
{

    vec4 _t_1 = texture2D(u_tex1, vCustomUV);
    gl_FragColor = vec4(_t_1);

}
