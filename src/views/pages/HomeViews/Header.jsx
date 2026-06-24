import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../components/Button";
import { AxonLogo } from "../../components/AxonLogo";
import { MenuOverlay } from "../../components/MenuOverlay";
import { scrollTo } from "@/lib/scrollTo";

const NAV_LINKS = [
  { label: "Platform", id: "platform", caret: true, brace: true },
  { label: "Solutions", id: "solution", caret: true },
  { label: "Customers", id: "customers" },
  { label: "Pricing", id: "plans" },
];

export default function Header({ dark = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // White treatment only while sitting over the dark hero at the top.
  const overDark = dark && !scrolled;

  const handleNav = (id) => {
    scrollTo(id, 90);
    setIsMenuOpen(false);
  };
  const handleRequestDemo = () => {
    scrollTo("request-demo", 90);
    setIsMenuOpen(false);
  };

  const navText = overDark
    ? "text-white/70 hover:text-white"
    : "text-ink-soft hover:text-ink";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-smooth ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-5 md:px-8 h-16 md:h-[4.5rem]">
        <AxonLogo
          variant={overDark ? "light" : "dark"}
          onClick={() => scrollTo("hero", 0)}
        />

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, id, caret, brace }) => (
            <button
              key={label}
              onClick={() => handleNav(id)}
              className={`group flex items-center gap-1.5 text-[0.95rem] transition-colors bg-transparent border-none cursor-pointer ${navText}`}
            >
              {brace ? (
                <span>
                  {label} <span className="text-accent">{"{ }"}</span>
                </span>
              ) : (
                label
              )}
              {caret && <IoIosArrowDown className="text-xs opacity-60" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("solution")}
            className={`hidden md:inline-flex text-[0.95rem] transition-colors bg-transparent border-none cursor-pointer ${navText}`}
          >
            Sign in
          </button>
          <Button
            text="Get a demo"
            variant={overDark ? "white" : "primary"}
            className="hidden sm:inline-flex py-2.5 px-5"
            onClick={handleRequestDemo}
          />

          <button
            className="flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none gap-[5px]"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-0.5 rounded transition-colors duration-300 ${overDark ? "bg-white" : "bg-ink"}`} />
            <span className={`w-6 h-0.5 rounded transition-colors duration-300 ${overDark ? "bg-white" : "bg-ink"}`} />
          </button>
        </div>
      </header>

      <MenuOverlay
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNav}
      />
    </div>
  );
}
