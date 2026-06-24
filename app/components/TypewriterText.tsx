'use client';

import { useEffect, useState } from 'react';

type TypewriterTextProps = {
  text: string;
  className?: string;
  delay?: number; // ms before starting
};

export default function TypewriterText({ text, className, delay = 0 }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    let index = 0;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 45);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className="cursor-blink text-accent">|</span>}
    </span>
  );
}
