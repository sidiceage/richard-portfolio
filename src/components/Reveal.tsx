import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Variant = "fade" | "thread" | "diamond" | "spinner" | "rise";

const variants: Record<Variant, { hidden: any; show: any }> = {
  fade: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } },
  rise: { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } },
  thread: { hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, show: { opacity: 1, clipPath: "inset(0 0% 0 0)" } },
  diamond: { hidden: { opacity: 0, scale: 0.6, rotate: 45 }, show: { opacity: 1, scale: 1, rotate: 0 } },
  spinner: { hidden: { opacity: 0, rotate: -180, scale: 0.5 }, show: { opacity: 1, rotate: 0, scale: 1 } },
};

export function Reveal({
  children,
  variant = "fade",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants[variant]}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
