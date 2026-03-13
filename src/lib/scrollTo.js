export function scrollTo(sectionId, offset = 80, duration = 900) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const start = window.scrollY;
    const target = el.getBoundingClientRect().top + window.scrollY - offset;
    const distance = target - start;

    // If already there, don't animate
    if (Math.abs(distance) < 1) return;

    let startTime = null;

    // Cubic ease-in-out: slow → fast → slow
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // clamp 0–1
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, start + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}