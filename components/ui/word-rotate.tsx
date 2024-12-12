'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2500,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  useEffect(() => {
    if (containerRef.current) {
      const maxHeight = Array.from(containerRef.current.children).reduce(
        (max, child) => Math.max(max, child.clientHeight),
        0
      );
      setContainerHeight(maxHeight);
    }
  }, [words]);

  return (
    <div
      className='relative min-h-[1.2em]'
      style={{ height: `${containerHeight}px` }}
      ref={containerRef}
    >
      {words.map((word, i) => (
        <motion.h1
          key={i}
          className={`${className} absolute ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: i === index ? 1 : 0, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
}
