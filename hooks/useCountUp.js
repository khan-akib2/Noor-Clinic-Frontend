"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for animated count-up numbers.
 * Uses Intersection Observer to trigger animation when element enters viewport.
 *
 * @param {number} target - The target number to count up to
 * @param {number} duration - Animation duration in milliseconds (default: 2000)
 * @returns {{ count: number, ref: React.RefObject }}
 */
export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();
    const startValue = 0;

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (target - startValue) * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);
  }, [target, duration, hasAnimated]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animate, hasAnimated]);

  return { count, ref };
}
