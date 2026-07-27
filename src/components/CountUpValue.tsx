import { useEffect, useRef, useState } from 'react';
import type { MetricItem } from '../config';

interface CountUpValueProps {
  metric: MetricItem;
}

export default function CountUpValue({ metric }: CountUpValueProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef(0);
  const startedAtRef = useRef(0);
  const elapsedRef = useRef(0);
  const completeRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(metric.countFrom ?? 0);

  useEffect(() => {
    const element = valueRef.current;
    if (!element) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const duration = 900;
    const startValue = metric.countFrom ?? 0;
    const distance = metric.countTo - startValue;
    let isVisible = false;

    const cancelFrame = () => {
      if (!frameRef.current) return;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };

    const finish = () => {
      completeRef.current = true;
      elapsedRef.current = duration;
      setDisplayValue(metric.countTo);
      cancelFrame();
    };

    const tick = (timestamp: number) => {
      if (!startedAtRef.current) {
        startedAtRef.current = timestamp - elapsedRef.current;
      }

      elapsedRef.current = Math.min(duration, timestamp - startedAtRef.current);
      const progress = elapsedRef.current / duration;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(startValue + distance * eased));

      if (progress >= 1) {
        finish();
        return;
      }

      if (isVisible && !document.hidden) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (completeRef.current) return;
      if (motionQuery.matches) {
        finish();
        return;
      }
      if (!isVisible || document.hidden || frameRef.current) return;
      startedAtRef.current = 0;
      frameRef.current = requestAnimationFrame(tick);
    };

    const pause = () => {
      cancelFrame();
      startedAtRef.current = 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) start();
        else pause();
      },
      { threshold: 0.35 }
    );

    const onVisibilityChange = () => {
      if (document.hidden) pause();
      else start();
    };

    const onMotionChange = () => {
      if (motionQuery.matches) finish();
    };

    observer.observe(element);
    document.addEventListener('visibilitychange', onVisibilityChange);
    motionQuery.addEventListener('change', onMotionChange);

    return () => {
      cancelFrame();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, [metric]);

  return (
    <>
      <span ref={valueRef} aria-hidden="true">
        {metric.prefix}
        {displayValue}
        {metric.suffix}
      </span>
      <span className="sr-only">{metric.value}</span>
    </>
  );
}
