"use client";

/* ═══════════════════════════════════════════════════════
   PROJECT CHARTS
   Form: emphasis (one accent hue + de-emphasis gray) — the story is
   "one of these won", not "tell four categories apart".
   Palette validated with dataviz/scripts/validate_palette.js:
     light  #F97316 + #5A6478 → CVD ΔE 19.8 · normal ΔE 29.6
     dark   #FF9A4D + #6B77A3 → CVD ΔE 22.9 · normal ΔE 29.1 · contrast PASS
   Accent sits below 3:1 on the page surface, so every value is
   direct-labelled and the source table is kept as the table view.
   ═══════════════════════════════════════════════════════ */

function ChartFrame({
  title,
  subtitle,
  footnote,
  children,
}: {
  title: string;
  subtitle?: string;
  footnote?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-6 rounded-xl border border-border-subtle p-5">
      <figcaption>
        <div className="text-[15px] font-display font-semibold text-text-primary">
          {title}
        </div>
        {subtitle && (
          <div className="text-[13px] text-text-secondary mt-1 leading-relaxed">
            {subtitle}
          </div>
        )}
      </figcaption>
      <div className="mt-5">{children}</div>
      {footnote && (
        <div className="text-[12px] text-text-secondary mt-4 leading-relaxed">
          {footnote}
        </div>
      )}
    </figure>
  );
}

export interface BarDatum {
  label: string;
  value: number;
  note?: string;
  highlight?: boolean;
}

/** Horizontal emphasis bars. Value rides the bar tip; bars are 14px with a
 *  4px rounded data-end and a square baseline. */
export function ModelComparisonChart({
  data,
  title,
  subtitle,
  footnote,
  unit = "%",
}: {
  data: BarDatum[];
  title: string;
  subtitle?: string;
  footnote?: string;
  unit?: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  // cap the longest bar at 78% of the track so the tip label always has room
  const scale = (v: number) => (v / max) * 78;

  return (
    <ChartFrame title={title} subtitle={subtitle} footnote={footnote}>
      <div className="flex flex-col gap-4">
        {data.map((d) => {
          const w = scale(d.value);
          const color = d.highlight ? "var(--accent-projects)" : "var(--chart-muted)";
          return (
            <div key={d.label} className="group relative">
              <div className="flex items-baseline gap-2 mb-1.5">
                <span
                  className={`text-[13px] ${
                    d.highlight
                      ? "text-text-primary font-semibold"
                      : "text-text-secondary"
                  }`}
                >
                  {d.label}
                </span>
                {d.note && (
                  <span className="text-[12px] text-text-secondary hidden sm:inline">
                    · {d.note}
                  </span>
                )}
              </div>

              <div className="relative h-[14px]">
                <div
                  className="absolute inset-y-0 left-0 rounded-r-[4px] transition-opacity duration-200 group-hover:opacity-80"
                  style={{ width: `${w}%`, background: color }}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 text-[13px] font-semibold text-text-primary whitespace-nowrap"
                  style={{ left: `${w}%`, marginLeft: 8, fontVariantNumeric: "tabular-nums" }}
                >
                  {d.value.toFixed(2)}
                  {unit}
                </span>
              </div>

              {d.note && (
                <div className="pointer-events-none absolute left-0 -top-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150 sm:hidden">
                  <div className="rounded-lg border border-border-default bg-surface-0 px-2.5 py-1.5 text-[12px] text-text-secondary shadow-md">
                    {d.note}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ChartFrame>
  );
}

export interface CIDatum {
  label: string;
  value: number;
  lo: number;
  hi: number;
  n: number;
  highlight?: boolean;
}

/** Dot plot with 95% confidence intervals on a shared axis.
 *  Dots are 10px with a 2px surface ring; CI rules are 2px. */
export function ABTestChart({
  data,
  domain,
  title,
  subtitle,
  footnote,
}: {
  data: CIDatum[];
  domain: [number, number];
  title: string;
  subtitle?: string;
  footnote?: string;
}) {
  const [lo, hi] = domain;
  const pos = (v: number) => ((v - lo) / (hi - lo)) * 100;

  // snap to a clean tick step rather than slicing the range into N equal parts
  const niceStep = [1, 2, 2.5, 5, 10, 20, 25, 50].find(
    (s) => (hi - lo) / s <= 8
  ) ?? (hi - lo) / 5;
  const ticks: number[] = [];
  for (let t = Math.ceil(lo / niceStep) * niceStep; t <= hi + 1e-9; t += niceStep) {
    ticks.push(t);
  }

  return (
    <ChartFrame title={title} subtitle={subtitle} footnote={footnote}>
      <div className="flex flex-col gap-5">
        {data.map((d) => {
          const color = d.highlight ? "var(--accent-projects)" : "var(--chart-muted)";
          return (
            <div key={d.label} className="group">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <span
                  className={`text-[13px] ${
                    d.highlight
                      ? "text-text-primary font-semibold"
                      : "text-text-secondary"
                  }`}
                >
                  {d.label}
                </span>
                <span className="text-[13px] text-text-primary font-semibold whitespace-nowrap">
                  <span style={{ fontVariantNumeric: "tabular-nums" }}>
                    {d.value.toFixed(2)}%
                  </span>
                  <span className="text-text-secondary font-normal ml-2">
                    n = {d.n}
                  </span>
                </span>
              </div>

              <div className="relative h-[18px]">
                {/* CI rule */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-[2px] rounded-full transition-opacity duration-200 group-hover:opacity-80"
                  style={{
                    left: `${pos(d.lo)}%`,
                    width: `${pos(d.hi) - pos(d.lo)}%`,
                    background: color,
                  }}
                />
                {/* end caps */}
                {[d.lo, d.hi].map((edge, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 h-[10px] w-[2px] rounded-full"
                    style={{
                      left: `${pos(edge)}%`,
                      transform: "translate(-50%, -50%)",
                      background: color,
                    }}
                  />
                ))}
                {/* point estimate */}
                <div
                  className="absolute top-1/2 h-[10px] w-[10px] rounded-full"
                  style={{
                    left: `${pos(d.value)}%`,
                    transform: "translate(-50%, -50%)",
                    background: color,
                    boxShadow: "0 0 0 2px var(--background)",
                  }}
                />
              </div>

              <div className="text-[12px] text-text-secondary mt-1.5">
                95% CI {d.lo.toFixed(2)}% – {d.hi.toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>

      {/* axis */}
      <div className="mt-4">
        <div className="h-px w-full bg-border-subtle" />
        <div className="relative h-4 mt-1">
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute text-[11px] text-text-secondary -translate-x-1/2"
              style={{ left: `${pos(t)}%`, fontVariantNumeric: "tabular-nums" }}
            >
              {Math.round(t)}%
            </span>
          ))}
        </div>
      </div>
    </ChartFrame>
  );
}
