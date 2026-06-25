import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../components/Button";
import { AxonLogo } from "../../components/AxonLogo";
import { MenuOverlay } from "../../components/MenuOverlay";
import { scrollTo } from "@/lib/scrollTo";

const NAV = [
  {
    label: "Platform",
    id: "platform",
    brace: true,
    menu: [
      { label: "Ask in plain language", id: "platform", hint: "Natural language · EN + AR" },
      { label: "Maps & visualization", id: "platform", hint: "Interactive ArcGIS layers" },
      { label: "Spatial analysis", id: "platform", hint: "25+ operations" },
      { label: "How it works", id: "how", hint: "From question to answer" },
    ],
  },
  {
    label: "Solutions",
    id: "solution",
    menu: [
      { label: "By industry", id: "industry", hint: "Real estate, gov, telecom…" },
      { label: "Integrations & cloud", id: "solution", hint: "PostGIS, ArcGIS, Oracle" },
      { label: "Security & enterprise", id: "enterprise", hint: "SSO, RBAC, on-prem" },
      { label: "How AXON compares", id: "compare", hint: "vs traditional GIS & generic AI" },
      { label: "FAQ", id: "faq", hint: "Common questions" },
    ],
  },
  { label: "Customers", id: "customers" },
  { label: "Pricing", id: "plans" },
];

function NavDropdown({ item, navText, onNav }) {
  return (
    <div className="relative group">
      <button
        onClick={() => onNav(item.id)}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 text-[0.95rem] transition-colors bg-transparent border-none cursor-pointer ${navText}`}
      >
        {item.brace ? (
          <span>
            {item.label} <span className="text-accent">{"{ }"}</span>
          </span>
        ) : (
          item.label
        )}
        <IoIosArrowDown className="text-xs opacity-60 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* hover bridge + panel */}
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 ease-smooth">
        <div className="w-72 rounded-2xl border border-line bg-white/95 backdrop-blur-xl shadow-card p-2">
          {item.menu.map((sub) => (
            <button
              key={sub.label}
              onClick={() => onNav(sub.id)}
              className="group/sub w-full text-left rounded-xl px-3 py-2.5 hover:bg-cloud transition-colors bg-transparent border-none cursor-pointer"
            >
              <span className="flex items-center justify-between text-sm font-medium text-ink">
                {sub.label}
                <span className="text-ink-muted opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all">
                  →
                </span>
              </span>
              {sub.hint && (
                <span className="block font-mono text-[0.6rem] uppercase tracking-wider text-ink-muted mt-0.5">
                  {sub.hint}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

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
          {NAV.map((item) =>
            item.menu ? (
              <NavDropdown
                key={item.label}
                item={item}
                navText={navText}
                onNav={handleNav}
              />
            ) : (
              <button
                key={item.label}
                onClick={() => handleNav(item.id)}
                className={`text-[0.95rem] transition-colors bg-transparent border-none cursor-pointer ${navText}`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            text="Get a demo"
            variant={overDark ? "white" : "primary"}
            className="hidden sm:inline-flex py-2.5 px-5"
            onClick={handleRequestDemo}
          />

          <button
            className="flex flex-col justify-center items-center w-10 h-10 relative gap-[5px] lg:hidden"
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
