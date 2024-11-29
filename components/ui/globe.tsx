'use client';

import createGlobe, { COBEOptions } from 'cobe';
import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRender: (state: Record<string, any>) => {
    // Access properties safely
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { phi, width, height } = state as {
      phi: number;
      width: number;
      height: number;
    };
    // Your rendering logic here
  },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [212 / 255, 175 / 255, 55 / 255],
  glowColor: [212 / 255, 175 / 255, 55 / 255],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
  ],
};

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const [r, setR] = useState(0);

  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const updatePointerInteraction = (clientX: number) => {
    pointerInteracting.current = clientX;
    updateCursor(true);
  };

  const updateCursor = (value: boolean) => {
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? 'grabbing' : 'grab';
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phiRef.current += 0.005;
      state.phi = phiRef.current + r;
      state.width = state.width * 2;
      state.height = state.height * 2;
    },
    [r]
  );

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      const { width } = canvasRef.current.getBoundingClientRect();
      createGlobe(canvasRef.current, {
        ...GLOBE_CONFIG,
        width: width * 2,
        height: width * 2,
        onRender,
      });
    }
  }, [onRender]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { width } = canvas.getBoundingClientRect();
    createGlobe(canvas, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'));

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onRender, onResize]);

  return (
    <div
      className={cn(
        'absolute inset-0 aspect-[1/1] w-full max-w-[700px]',
        className
      )}
    >
      <canvas
        className={cn(
          'size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]'
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(0)}
        onPointerMove={(e) => updateMovement(e.clientX)}
      />
    </div>
  );
};

export default Globe;
