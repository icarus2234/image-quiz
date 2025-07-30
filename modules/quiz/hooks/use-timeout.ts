import { useEffect, useRef } from 'react';

export const useTimeout = (callback: () => void, timeout: number): void => {
  const hasExecuted = useRef(false);

  useEffect(() => {
    if (hasExecuted.current) return;

    const timer = setTimeout(() => {
      callback();
      hasExecuted.current = true;
    }, timeout);

    return () => clearTimeout(timer);
  }, [callback, timeout]);
};
