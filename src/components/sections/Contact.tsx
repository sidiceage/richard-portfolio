import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const channels = [
  { icon: Mail, label: "Email", value: "richardmartinez327@outlook.com", color: "text-red-400", href: "mailto:richardmartinez327@outlook.com" },
  { icon: Phone, label: "Phone", value: "+1 (202) 643-3173", color: "text-emerald-400", href: "tel:+12026433173" },
  { icon: MapPin, label: "Location", value: "Garland, Texas, US", color: "text-cyan-400", href: "#" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal variant="thread">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">Get In <span className="text-gradient">Touch</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Have a project in mind or want to discuss analytics, engineering, or data opportunities? Reach out via any channel below.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <Reveal variant="fade">
            <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, data challenges, or opportunities to be part of your team.
            </p>
            <div className="space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} variant="rise" delay={i * 0.1}>
                  <a href={c.href} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all">
                    <div className="w-12 h-12 rounded-lg bg-secondary grid place-items-center">
                      <c.icon className={`w-5 h-5 ${c.color}`} />
                    </div>
                    <div>
                      <div className={`font-semibold ${c.color}`}>{c.label}</div>
                      <div className="text-sm text-muted-foreground">{c.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal variant="diamond">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message ready! Opening your email client...");
                const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
                window.location.href = `mailto:richardmartinez327@outlook.com?subject=Project%20Inquiry&body=${encodeURIComponent(body)}`;
              }}
              className="p-8 rounded-2xl bg-card border border-border space-y-5"
            >
              <h3 className="text-2xl font-bold">Send Me a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" placeholder="John Doe"
                  value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Your Email" placeholder="john@example.com" type="email"
                  value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Message</label>
                <textarea required rows={5} placeholder="I'd like to discuss a project..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:shadow-cyan transition-all">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>

        <div className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Richard Martinez - Senior Software Engineer · Analytics · Full Stack Developer
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1.5">{label}</label>
      <input required type={type} placeholder={placeholder} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-input/50 border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
    </div>
  );
}
