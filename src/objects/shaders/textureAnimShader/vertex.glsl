 // Set the precision for data types used in this shader
precision highp float;
precision highp int;

attribute vec2 customUV;

varying vec2 vCustomUV;

void main()
{
    vCustomUV = customUV;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    //  gl_Position = projectedPosition;
}