import React, { useEffect, useRef } from "react";

// Default parameters
const defaultParams = {
  patternScale: 2,
  refraction: 0.015,
  edge: 1,
  patternBlur: 0.005,
  liquid: 0.07,
  speed: 0.3,
};

// Vertex Shader
const vertexShaderSource = `#version 300 es
in vec2 a_position;
out vec2 vUv;
void main() {
  vUv = 0.5 * (a_position + 1.0);
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

// Simple metallic fragment shader
const liquidFragSource = `#version 300 es
precision mediump float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D u_image_texture;
uniform float u_time;
uniform float u_edge;
void main() {
  vec4 img = texture(u_image_texture, vUv);
  float edge = img.r;
  float opacity = 1.0 - smoothstep(0.5 - u_edge, 0.5 + u_edge, edge);
  fragColor = vec4(vec3(0.8, 0.8, 0.9) * opacity, 1.0);
}`;

export default function MetallicPaint({ imageData, params = defaultParams }) {
  const canvasRef = useRef();
  const glRef = useRef();
  const programRef = useRef();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    // Compile shader
    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, liquidFragSource);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Setup full-screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    // Upload texture
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); // flip
    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      imageData.width,
      imageData.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      imageData.data
    );

    const u_image = gl.getUniformLocation(program, "u_image_texture");
    gl.uniform1i(u_image, 0);
    const u_edge = gl.getUniformLocation(program, "u_edge");
    gl.uniform1f(u_edge, params.edge);

    programRef.current = program;
    glRef.current = gl;

    function render(now) {
      timeRef.current = now * 0.001;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Resize canvas
    function resize() {
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      gl.deleteTexture(texture);
    };
  }, [imageData, params.edge]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
