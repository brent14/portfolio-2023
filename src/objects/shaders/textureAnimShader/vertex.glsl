 // Set the precision for data types used in this shader
precision highp float;
precision highp int;

attribute vec2 customUV;
attribute vec3 modelNormal;

varying vec2 vCustomUV;
varying vec3 vModelNormal;

void main()
{
    vCustomUV = customUV;
    vModelNormal = modelNormal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    //  gl_Position = projectedPosition;
}