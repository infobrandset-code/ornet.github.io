import { useState, useEffect, useRef, useMemo } from "react";

interface TargetInfo {
  target: number;
  suffix: string;
  raw: string;
}

function getTargetInfo(end: string | number): TargetInfo | null {
  const raw = String(end);
  // Match digits, optional decimal points and capture suffix
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) {
    const rawMatch = raw.match(/^([\d,.]+)(.*)$/);
    if (!rawMatch) return null;
    const numStr = rawMatch[1].replace(/,/g, "");
    const suffix = rawMatch[2];
    const target = parseFloat(numStr);
    if (isNaN(target)) return null;
    return { target, suffix, raw };
  }
  const numStr = match[1];
  const suffix = match[2];
  const target = parseFloat(numStr);
  if (isNaN(target)) return null;
  return { target, suffix, raw };
}

interface CountUpOptions {
  duration?: number;
  enabled?: boolean;
}

export default function useCountUp(
  end: string | number,
  { duration = 2000, enabled = false }: CountUpOptions = {}
): { value: string; opacity: number } {
  const info = useMemo(() => getTargetInfo(end), [end]);
  const initial = info ? "0" : String(end);
  const [value, setValue] = useState(initial);
  const [opacity, setOpacity] = useState(0.5);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled || !info) {
      if (!info) setValue(String(end));
      return;
    }

    const { target, suffix } = info;
    const formatNumber = (n: number) => {
      // Check if target is decimal
      const isDecimal = String(target).includes(".");
      const decimals = isDecimal ? String(target).split(".")[1]?.length || 0 : 0;
      const formatted = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
    };

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      const current = target * eased;
      setValue(formatNumber(current));
      setOpacity(0.5 + eased * 0.5);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setOpacity(1);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, enabled, info]);

  return { value, opacity };
}
