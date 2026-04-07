// hooks/useObserver.ts
import { RefObject, useEffect, useRef } from "react";

export function useObserver({
  target,
  onIntersect,
  enabled = true,
}: {
  target: RefObject<HTMLDivElement | null>;
  onIntersect: () => void;
  enabled?: boolean;
}) {
  const onIntersectRef = useRef(onIntersect);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersectRef.current();
      },
      { threshold: 1.0 },
    );

    observer.observe(target.current);
    return () => observer.disconnect();
  }, [enabled, target]);
}
