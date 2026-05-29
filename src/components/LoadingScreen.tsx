import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onDone, 800);
          }, 400);
          return 100;
        }
        return Math.min(100, p + Math.random() * 4 + 1);
      });
    }, 60);
    return () => clearInterval(id);
  }, [onDone]);

  const R = 120;
  const C = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
            {/* Outer rotating ring */}
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 320 320" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.85 0.15 200)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.22 245)" />
                  </linearGradient>
                </defs>
                <circle cx="160" cy="160" r="150" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />
              </svg>
            </div>
            {/* Inner reverse ring */}
            <div className="absolute inset-8 animate-spin-reverse">
              <svg viewBox="0 0 256 256" className="w-full h-full">
                <circle cx="128" cy="128" r="120" fill="none" stroke="oklch(0.85 0.15 200 / 0.4)" strokeWidth="1" strokeDasharray="2 14" />
              </svg>
            </div>

            {/* Main progress circle */}
            <svg viewBox="0 0 280 280" className="absolute inset-5 -rotate-90">
              <defs>
                <linearGradient id="progGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.85 0.15 200)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.22 245)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle cx="140" cy="140" r={R} fill="none" stroke="oklch(0.2 0.04 260)" strokeWidth="4" />
              <circle
                cx="140" cy="140" r={R}
                fill="none"
                stroke="url(#progGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={C - (progress / 100) * C}
                filter="url(#glow)"
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
              {/* Tick marks */}
              {Array.from({ length: 60 }).map((_, i) => {
                const a = (i / 60) * Math.PI * 2;
                const x1 = 140 + Math.cos(a) * 135;
                const y1 = 140 + Math.sin(a) * 135;
                const x2 = 140 + Math.cos(a) * (i % 5 === 0 ? 142 : 140);
                const y2 = 140 + Math.sin(a) * (i % 5 === 0 ? 142 : 140);
                const active = i / 60 < progress / 100;
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={active ? "oklch(0.85 0.15 200)" : "oklch(0.25 0.04 260)"}
                    strokeWidth={i % 5 === 0 ? 2 : 1} />
                );
              })}
            </svg>

            {/* Center percentage */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="text-6xl font-bold text-gradient glow-text tabular-nums tracking-tight">
                {Math.floor(progress)}
                <span className="text-2xl text-cyan-glow">%</span>
              </div>
              <div className="mt-2 text-xs tracking-[0.4em] text-cyan-glow/70 uppercase">
                Initializing
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-cyan-glow"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
          <div className="mt-4 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            Richard M · Loading Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
