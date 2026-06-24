import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";
import { AxonLogo } from "./AxonLogo";
import { getLenis } from "../../lib/smoothScroll";

const links = [
  { label: "Home", id: "hero" },
  { label: "Platform", id: "platform" },
  { label: "Solutions", id: "solution" },
  { label: "Customers", id: "customers" },
  { label: "Pricing", id: "plans" },
  { label: "Request a demo", id: "request-demo" },
];

const socials = [
  { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "https://twitter.com", label: "X" },
  { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

const ease = [0.76, 0, 0.24, 1];

export function MenuOverlay({ open, onClose, onNavigate }) {
  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    return () => getLenis()?.start();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink-900 grain overflow-hidden flex flex-col"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* aurora */}
          <div
            className="absolute -top-24 -right-16 w-[40rem] h-[40rem] pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(2,111,227,0.4), transparent 55%), radial-gradient(circle at 90% 70%, rgba(34,211,204,0.35), transparent 55%)",
              filter: "blur(40px)",
            }}
          />

          {/* top bar */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-8 h-16 md:h-[4.5rem] flex items-center justify-between">
            <AxonLogo variant="light" onClick={() => onNavigate("hero")} />
            <button
              onClick={onClose}
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Close
              <span className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 w-5 h-px bg-current rotate-45" />
                <span className="absolute top-1/2 left-0 w-5 h-px bg-current -rotate-45" />
              </span>
            </button>
          </div>

          {/* links */}
          <nav className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto px-5 md:px-8">
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
              className="flex flex-col"
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } },
                  }}
                  className="border-t border-dashed border-white/12 first:border-t-0"
                >
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="group w-full flex items-baseline gap-5 py-3 md:py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="font-mono text-xs text-white/35 group-hover:text-accent transition-colors">
                      {`0${i + 1}`}
                    </span>
                    <span className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-white/85 group-hover:text-white tracking-[-0.04em] transition-all duration-300 group-hover:translate-x-3">
                      {link.label}
                    </span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
            className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-dashed border-white/12"
          >
            <div className="flex flex-col gap-1">
              <a href="mailto:info@axon.ai" className="text-white/70 hover:text-white transition-colors">
                info@axon.ai
              </a>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-white/35">
                Cairo, Egypt
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-ink transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
