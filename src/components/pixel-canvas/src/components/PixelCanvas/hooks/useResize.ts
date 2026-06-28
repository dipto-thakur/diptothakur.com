"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface Size {
  width: number;
  height: number;
}

export function useResize<T extends HTMLElement>() {
  const element = useRef<T | null>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const measure = useCallback(() => {
    const el = element.current;
    if (!el) return;

    const { clientWidth: width, clientHeight: height } = el;

    setSize(prev =>
      prev.width === width && prev.height === height
        ? prev
        : { width, height },
    );
  }, []);

  const ref = useCallback((node: T | null) => {
    element.current = node;
    if (node) measure();
  }, [measure]);

  useEffect(() => {
    const el = element.current;
    if (!el) return;

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [measure]);

  return {
    ref,
    element,
    size,
  };
}