import React, { RefObject } from "react";

interface CanvasProps {
  id: string;
  canvasRef: RefObject<HTMLCanvasElement>;
  width: number;
  height: number;
  CSSProperties?: React.CSSProperties;
}
const canvas = ({
  id,
  canvasRef,
  width,
  height,
  CSSProperties,
}: CanvasProps) => {
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
