import { useState, useEffect, useRef } from "react";

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export default function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px"
}: InViewOptions = {}): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
