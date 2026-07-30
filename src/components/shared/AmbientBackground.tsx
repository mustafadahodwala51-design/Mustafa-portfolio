import { useEffect, useRef, useState } from "react";

export function AuroraBackground({ intensity = 1 }: { intensity?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.55) 0%, transparent 70%)",
          opacity: 0.35 * intensity,
          animation: "aurora-float 28s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[70vh] w-[70vh] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.55) 0%, transparent 70%)",
          opacity: 0.28 * intensity,
          animation: "aurora-float-2 34s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 left-1/4 h-[55vh] w-[55vh] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)",
          opacity: 0.22 * intensity,
          animation: "aurora-float 40s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
      }}
    />
  );
}

export function NoiseOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.04] mix-blend-overlay"
    >
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}

export function ParticlesLayer({ count = 40 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (reduce) { setEnabled(false); return; }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const actualCount = isTouch ? Math.min(18, count) : count;
    const particles = Array.from({ length: actualCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -Math.random() * 0.3 - 0.05,
      alpha: Math.random() * 0.4 + 0.15,
      hue: Math.random() > 0.6 ? "124,58,237" : "255,255,255",
    }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    let raf = 0;
    let running = true;
    const onVisibility = () => { running = !document.hidden; if (running) raf = requestAnimationFrame(draw); };
    document.addEventListener("visibilitychange", onVisibility);

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [count]);

  if (!enabled) return null;
  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}

export function SpotlightCursor() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (reduce || isTouch) return;
    let raf = 0;
    let latest = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      latest = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(() => { setPos(latest); raf = 0; });
    };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  if (!pos) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[2] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity"
      style={{
        left: pos.x, top: pos.y,
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
