import { useEffect, useState } from "react";
import brandLogo from "@/assets/richard-logo.png";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-wider flex items-center gap-2">
          <img src={brandLogo} alt="Richard Martinez logo" className="w-9 h-9 rounded-full object-cover shadow-[0_0_20px_oklch(0.65_0.22_245_/_0.6)] ring-1 ring-cyan-glow/40" />
          <span className="text-gradient">RICHARD</span><span className="text-foreground">.M</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-foreground/90 hover:text-cyan-glow transition-colors font-medium">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
