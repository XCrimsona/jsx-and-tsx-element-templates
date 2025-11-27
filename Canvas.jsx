import React from "react";

const canvas = ({ id, canvasRef, width, height, CSSProperties }) => {
  return (
    <canvas
      id={id}
      ref={canvasRef}
      width={width}
      height={height}
      style={CSSProperties}
    ></canvas>
  );
};

export default canvas;
