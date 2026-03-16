"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { personalInfo } from "@/data/portfolio";

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setFormState("sending");

    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      setFormState("sent");
      setTimeout(() => setFormState("idle"), 3000);
    }, 800);
  };

  const socialLinks = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Github, label: "GitHub", value: "himanshumjain15", href: personalInfo.github },
    { icon: Linkedin, label: "LinkedIn", value: "himanshumjain15", href: personalInfo.linkedin },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-layout mx-auto px-6 lg:px-8">
        <SectionHeading accent="var(--accent-contact)">Contact</SectionHeading>

        {/* Greeting */}
        <ScrollReveal>
          <div className="mb-10">
            <p className="text-[28px] sm:text-[34px] font-display font-bold text-text-primary leading-tight mb-2">
              Working on something
            </p>
            <p className="text-[28px] sm:text-[34px] font-display font-bold text-accent-contact leading-tight">
              interesting? Let&apos;s talk.
            </p>
            <p className="text-[16px] text-text-secondary mt-4 max-w-prose">
              I am always open to discussing data science projects, research collaborations,
              or opportunities in applied ML and analytics.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10">
          {/* Social links */}
          <div className="space-y-3">
            {socialLinks.map((link, i) => (
              <ScrollReveal key={link.label} delay={i * 80}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-1 transition-all group border-l-[3px] border-l-transparent hover:border-l-accent-contact hover:pl-4"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
                    style={{
                      background: "color-mix(in srgb, var(--accent-contact) 10%, transparent)",
                      color: "var(--accent-contact)",
                    }}
                  >
                    <link.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] text-text-tertiary font-medium uppercase tracking-wide">
                      {link.label}
                    </p>
                    <p className="text-[15px] text-text-primary group-hover:text-accent-contact transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            {/* Availability card */}
            <ScrollReveal delay={400}>
              <div
                className="mt-4 p-4 rounded-xl"
                style={{
                  background: "color-mix(in srgb, var(--accent-experience) 8%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--accent-experience) 25%, transparent)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-experience opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-experience" />
                  </span>
                  <span className="text-[13px] font-semibold text-accent-experience">
                    Currently Available
                  </span>
                </div>
                <p className="text-[13px] text-text-secondary">
                  Open to internship and full-time roles in Data Science, Data Engineering, and Applied ML.
                  Open to relocate.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <label>Your Name</label>
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label>Email Address</label>
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  rows={5}
                  placeholder=" "
                  required
                />
                <label>Message</label>
              </div>

              <button
                type="submit"
                disabled={formState === "sending"}
                className="btn-primary w-full justify-center"
                style={{ "--btn-color": "var(--accent-contact)" } as React.CSSProperties}
              >
                {formState === "idle" && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {formState === "sending" && (
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                )}
                {formState === "sent" && (
                  <>
                    <Check size={16} />
                    Sent!
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
