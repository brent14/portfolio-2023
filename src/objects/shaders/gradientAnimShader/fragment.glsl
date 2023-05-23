uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform sampler2D u_tex1;
uniform sampler2D u_tex2;

uniform vec3 uColorMap[10];

varying float vElevation;
varying vec2 vUv;

float uMinHeight = 0.0;
float uMaxHeight = 2.0;


void main()
{
    vec4 _t_1 = texture2D(u_tex1, vUv);
    // float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    // vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);

    // // mix based on elevation
    
    //gl_FragColor = vec4(vec3(vElevation), 1.0);

    // Normalize the elevation value to the range [0, 1]
    float normalizedHeight = (vElevation - uMinHeight) / (uMaxHeight - uMinHeight);
    
    // Calculate the index of the color in the colormap
    float colorIndex = normalizedHeight * 1.0;
    
    // Get the indices for the two nearest colors
    int index1 = int(floor(colorIndex));
    int index2 = int(ceil(colorIndex));
    
    // Interpolate between the two nearest colors
    // vec3 color = mix(uColorMap[index1], uColorMap[index2], fract(colorIndex));

    vec3 color = mix(uDepthColor, uSurfaceColor, normalizedHeight);

    // vec3 texColor =  mix(color, _t_1.xyz, 0.15);
    
    // Output the color
    gl_FragColor = vec4(color, 1.0);
}



