import { Reveal } from "@/components/Reveal";
import { BarChart3, Database, Code2, Cloud, Bot, Users } from "lucide-react";

const highlights = [
  { icon: BarChart3, label: "Analytics & Marketplace Strategy" },
  { icon: Database, label: "Data Engineering & ETL Pipelines" },
  { icon: Code2, label: "Full Stack · C# · .NET Core · React" },
  { icon: Cloud, label: "AWS · Azure · Docker · Kubernetes" },
  { icon: Bot, label: "AI-Assisted Analytics & Automation" },
  { icon: Users, label: "Cross-Functional Leadership" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="thread">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">About <span className="text-gradient">Me</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Senior Software Engineer turning complex business data into reliable decisions, dashboards, and scalable platforms.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-5 gap-12 items-start">
          <Reveal variant="diamond" className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-glow p-8 bg-card">
              <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-2xl -z-10" />
              <div className="text-7xl font-bold text-gradient glow-text">10+</div>
              <div className="mt-2 text-sm tracking-[0.3em] uppercase text-cyan-glow">Years of Experience</div>
              <div className="mt-8 space-y-4">
                <Stat label="KPI Dashboards Built" value="100+" />
                <Stat label="ETL Pipelines Deployed" value="80+" />
                <Stat label="Cloud Deployments" value="50+" />
                <Stat label="Tech Stack" value="15+" />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 space-y-6">
            <Reveal variant="fade">
              <h3 className="text-2xl font-bold">Senior <span className="text-cyan-glow">Software Engineer</span></h3>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                Senior Software Engineer with 10+ years of experience building analytics-driven full stack platforms,
                data pipelines, KPI dashboards, and business intelligence workflows for enterprise and healthcare domains.
                Strong hands-on background in SQL, Python, C#, .NET Core, React, TypeScript, PostgreSQL, SQL Server,
                ETL automation, API development, and cloud deployments.
              </p>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                Experienced partnering with Product, GTM, Engineering, and Operations teams to analyze conversion funnels,
                supply-demand patterns, partner performance, pricing impact, and operational profitability. Skilled in
                translating ambiguous business questions into reliable dashboards, experiments, automated reporting systems,
                and AI-assisted analytics workflows that improve decision speed, reduce manual analysis, and support
                scalable marketplace-style growth.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <Reveal key={h.label} variant="fade" delay={0.05 * i}>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="w-9 h-9 rounded-md bg-gradient-brand grid place-items-center text-primary-foreground">
                      <h.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{h.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-xl font-bold text-cyan-glow tabular-nums">{value}</span>
    </div>
  );
}
