"use client";

import { useEffect, useRef } from "react";

interface SectionHeadingProps {
  children: string;
  accent: string;
  className?: string;
}

export function SectionHeading({ children, accent, className = "" }: SectionHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chars = children.split("");

  return (
    <h2
      ref={ref}
      className={`section-heading char-split text-[28px] md:text-[45px] font-display font-bold text-text-primary mb-8 ${className}`}
      style={{ "--heading-accent": accent } as React.CSSProperties}
      aria-label={children}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 18}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
