import { useEffect } from 'react';
import p5 from 'p5';

const useP5Sketch = (containerRef, sketchFn) => {
  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any old canvas if present
    const existingCanvases = containerRef.current.querySelectorAll('canvas');
    existingCanvases.forEach((c) => c.remove());

    const p5Instance = new p5(sketchFn, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [containerRef, sketchFn]);
};

export default useP5Sketch;
