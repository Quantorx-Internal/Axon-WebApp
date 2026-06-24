import { useEffect, useRef } from "react";

/**
 * Custom cursor — a precise dot, a lagging ring that grows over interactive
 * elements, and a contextual label (e.g. PLAY / EXPLORE) when hovering an
 * element with [data-cursor-label]. Disabled on touch / coarse pointers.
 */
export function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const onOver = (e) => {
      const t = e.target;
      if (!t.closest) return;
      const labelled = t.closest("[data-cursor-label]");
      if (labelled) {
        label.textContent = labelled.getAttribute("data-cursor-label");
        ring.classList.add("cursor-ring--label");
        return;
      }
      if (t.closest("a, button, [data-cursor]")) {
        ring.classList.add("cursor-ring--active");
      }
    };

    const onOut = (e) => {
      const t = e.target;
      if (!t.closest) return;
      if (t.closest("[data-cursor-label]")) {
        ring.classList.remove("cursor-ring--label");
      }
      if (t.closest("a, button, [data-cursor]")) {
        ring.classList.remove("cursor-ring--active");
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
}
