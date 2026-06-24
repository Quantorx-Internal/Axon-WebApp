import { useRef, useEffect } from "react";

/**
 * Performant flowing-aurora canvas (no WebGL). Large soft radial gradients
 * drift and pulse with additive blending over near-black — a Lusion-flavored
 * "liquid" backdrop that stays cheap on the GPU. Honors reduced-motion.
 */
export function AnimatedAurora({ className }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const blobs = [
      { c: [2, 111, 227], x: 0.24, y: 0.34, r: 0.5, sx: 0.6, sy: 0.42, p: 0 },
      { c: [34, 211, 204], x: 0.72, y: 0.3, r: 0.42, sx: 0.5, sy: 0.7, p: 2 },
      { c: [124, 108, 255], x: 0.55, y: 0.72, r: 0.52, sx: 0.7, sy: 0.5, p: 4 },
      { c: [46, 224, 158], x: 0.84, y: 0.78, r: 0.34, sx: 0.4, sy: 0.62, p: 1 },
    ];

    let w, h, dpr, raf;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const render = (t) => {
      const time = t * 0.0001;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#0b0c0e";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const minDim = Math.min(w, h);

      for (const b of blobs) {
        const cx = (b.x + Math.sin(time * b.sx + b.p) * 0.13) * w;
        const cy = (b.y + Math.cos(time * b.sy + b.p) * 0.13) * h;
        const rr = b.r * minDim * (1 + Math.sin(time * 0.8 + b.p) * 0.12);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
        const [r, gn, bl] = b.c;
        g.addColorStop(0, `rgba(${r},${gn},${bl},0.42)`);
        g.addColorStop(1, `rgba(${r},${gn},${bl},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(render);
    };

    if (reduce) {
      render(8000);
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
