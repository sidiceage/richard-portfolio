import { Reveal } from "@/components/Reveal";
import { ExternalLink } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  {
    title: "AI Voice Chatbot",
    description: "Implemented advanced algorithms for TTS and STT to achieve human-like voice quality and accuracy.",
    skills: ["Speech Synthesis", "API Integration", "AI", "Python", "Chatbot"],
    url: "https://sistava.com/en/",
    image: p1,
  },
  {
    title: "AI for Furniture & Interior E-commerce",
    description: "AI-powered product operations for furniture and interior brands. From import to enrichment, photography, 3D models, and SEO — automated end-to-end.",
    skills: ["AI / LLM", "Web Dev", "E-commerce API", "Computer Vision", "Cloud Automation"],
    url: "https://www.automatedcommerce.ai/use-cases/furniture",
    image: p2,
  },
  {
    title: "Affordable & Free CRM Solutions",
    description: "A business software platform helping companies find affordable and free CRM tools, automation platforms and productivity solutions through comparisons and reviews.",
    skills: ["Web Dev", "CMS / Blog", "SEO", "CRM / API", "Content Marketing"],
    url: "https://www.vendorbox.io/affordable-free-crms/",
    image: p3,
  },
  {
    title: "AI-Powered Social Media Scheduling",
    description: "Postiz — a modern social media management platform to create, schedule, automate and manage content across multiple channels with AI-powered tools.",
    skills: ["Web Dev", "AI Automation", "REST APIs", "Cloud Infra", "UI/UX"],
    url: "https://postiz.com/",
    image: p4,
  },
  {
    title: "AI Copilot Platform for SaaS",
    description: "Superflows — an AI integration platform that helps SaaS companies add copilots, chat assistants and intelligent workflows to their applications.",
    skills: ["LLM Integration", "Full-Stack SaaS", "API Architecture", "Cloud Scale", "Conversational UX"],
    url: "https://www.superflows.ai/",
    image: p5,
  },
  {
    title: "AI Workflow Automation Assistant",
    description: "Lutra AI — an AI-powered productivity and workflow automation platform to automate business tasks, manage workflows and interact with data via conversational AI.",
    skills: ["LLM Integration", "Full-Stack SaaS", "Workflow Automation", "Cloud Backend", "Chat Interface"],
    url: "https://lutra.ai/",
    image: p6,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal variant="thread">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">My <span className="text-gradient">Projects</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              A selection of AI, automation and SaaS work — from voice agents to enterprise CRM platforms.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p, idx) => {
            const variants = ["fade", "diamond", "thread", "spinner", "rise", "diamond"] as const;
            return (
              <Reveal key={p.title} variant={variants[idx]} delay={idx * 0.08}>
                <a href={p.url} target="_blank" rel="noreferrer"
                  className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/60 hover:shadow-glow transition-all h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur grid place-items-center border border-primary/40 text-cyan-glow group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-cyan-glow transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.skills.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-[11px] text-cyan-glow">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
