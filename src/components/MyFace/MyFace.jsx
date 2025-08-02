import React, { useRef } from 'react';
import useP5Sketch from './useP5Sketch';
import asciiSketch from './asciiSketch';

const MyFace = () => {
  const containerRef = useRef();
  useP5Sketch(containerRef, asciiSketch);

  return <div ref={containerRef}></div>;
};

export default MyFace;
