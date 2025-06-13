// hooks/useObserver.ts
import { RefObject, useEffect } from "react";

export function useObserver({
  target,
  onIntersect,
  enabled = true,
}: {
  target: RefObject<HTMLDivElement | null>;
  onIntersect: () => void;
  enabled?: boolean;
}) {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { threshold: 1.0 },
    );

    observer.observe(target.current);
    return () => observer.disconnect();
  }, [enabled, target, onIntersect]);
}
