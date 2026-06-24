import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getLenis } from "../../lib/smoothScroll";

const ease = [0.22, 1, 0.36, 1];

/** Normalize a YouTube / Vimeo watch URL into an embeddable autoplay URL. */
function toEmbed(url) {
  const yt = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return null;
}

/**
 * Lusion-style cinematic video lightbox. Plays an .mp4/.webm directly or
 * embeds a YouTube / Vimeo URL. Locks scroll and closes on backdrop / Esc.
 */
export function VideoModal({ open, onClose, video }) {
  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();

    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => {
      getLenis()?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const src = video?.url || "";
  const isFile = /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
  const embed = !isFile && src ? toEmbed(src) : null;

  return (
    <AnimatePresence>
      {open && video && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-ink-900/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 18 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <p className="font-mono text-[0.65rem] md:text-xs uppercase tracking-[0.14em] text-white/70">
                {video.tag && <span className="text-accent-soft">{video.tag}</span>}
                {video.tag && <span className="mx-2 text-white/30">/</span>}
                {video.title}
              </p>
              <button
                onClick={onClose}
                aria-label="Close video"
                className="group flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                Close
                <span className="relative w-4 h-4">
                  <span className="absolute top-1/2 left-0 w-4 h-px bg-current rotate-45" />
                  <span className="absolute top-1/2 left-0 w-4 h-px bg-current -rotate-45" />
                </span>
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black border border-white/10 shadow-lift">
              {isFile ? (
                <video
                  src={src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : embed ? (
                <iframe
                  src={embed}
                  title={video.title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white/60 font-mono text-sm">
                  Video unavailable
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
