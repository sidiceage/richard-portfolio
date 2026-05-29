import { ArrowRight } from "lucide-react";
import logo from "@/assets/richard-portrait.png";
import moonImg from "@/assets/moon.jpg";
import { Reveal } from "@/components/Reveal";

export function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-glow/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-glow/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div>
          <Reveal variant="fade">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs tracking-[0.3em] text-cyan-glow uppercase">
              Senior Software Engineer · Analytics · Full Stack
            </span>
          </Reveal>
          <Reveal variant="rise" delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient glow-text">Richard Martinez.</span>
            </h1>
          </Reveal>
          <Reveal variant="thread" delay={0.25}>
            <p className="mt-4 text-2xl md:text-3xl text-foreground/90">
              I build <span className="text-cyan-glow">analytics-driven platforms</span> that move metrics.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.4}>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              10+ years engineering full stack apps, ETL pipelines, KPI dashboards, and AI-assisted
              BI workflows for enterprise and healthcare turning ambiguous questions into reliable decisions.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={0.55}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:shadow-cyan transition-all">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center px-7 py-3.5 rounded-full border border-primary/40 text-cyan-glow hover:bg-primary/10 transition-colors">
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="spinner" delay={0.2}>



<div className="relative flex h-[520px] w-full items-end justify-center md:h-[640px] lg:ml-12">
          {/* Moon */}
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-[58%] md:h-[600px] md:w-[600px]">
            <div className="moon-pulse h-full w-full moon-halo">
              <img
                src={moonImg}
                alt="Glowing moon"
                className="h-full w-full rounded-full object-cover"
                style={{
                  filter: "brightness(1.3) saturate(1.4)",
                  boxShadow: "0 0 32px 10px rgba(147, 227, 255, 0.55)",
                  maskImage: "radial-gradient(circle, black 62%, transparent 72%)",
                  WebkitMaskImage: "radial-gradient(circle, black 62%, transparent 72%)",
                }}
              />
            </div>
            {/* orbit rings removed per request */}
          </div>

          {/* Avatar standing in front of moon */}
          <div className="relative z-10 float animate-float-orb transform -translate-y-6 md:-translate-y-8 lg:-translate-y-10">
            <div className="absolute -inset-6 rounded-full bg-aurora opacity-30 blur-3xl" />
            <img
              src={logo}
              alt="Richard Martinez"
              className="relative h-[340px] w-[340px] object-contain md:h-[460px] md:w-[460px]"
              loading="lazy"
              decoding="async"
              style={{
                filter: "drop-shadow(0 30px 40px oklch(0.08 0.02 265 / 0.7))",
                WebkitMaskImage: "linear-gradient(180deg, black 70%, transparent 100%)",
                maskImage: "linear-gradient(180deg, black 70%, transparent 100%)",
              }}
            />
          </div>
        </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-[220px] bg-gradient-to-t from-background via-background/40 to-transparent blur-3xl opacity-95" />

        </Reveal>
      </div>
    </section>
  );
}
