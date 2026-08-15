import TechCard from "./TechCard";
import { techRows } from "../../../public/constant/techData";
import { videos } from "../../../public/constant/videos";
import AnimatedTitle from "../../component/AnimatedTitle.jsx";

export default function TechStack() {
  const MAX_COLS = Math.max(...techRows.map((row) => row.length));

  return (
    <section className="relative isolate overflow-hidden border border-white/10 bg-black px-1 py-28 text-white md:py-32">
      {/* Background Video */}
      <video
        src={videos.hero4}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/15 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.18)_70%,rgba(0,0,0,.55)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">
          EVERY COMPILE IS A BATTLE
        </p>

        {/* Animated Heading */}
        <div className="mb-16">
          <AnimatedTitle
            title="TECH <b>STACK</b>"
            containerClass="pointer-events-none relative z-10 mix-blend-difference"
          />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div
            className="grid justify-center gap-y-6"
            style={{
              gridTemplateColumns: `repeat(${MAX_COLS}, 84px)`,
              columnGap: "16px",
            }}
          >
            {techRows.flatMap((row) => {
              const start = Math.floor((MAX_COLS - row.length) / 2) + 1;

              return row.map((tech, i) => (
                <div key={tech.name} style={{ gridColumn: start + i }}>
                  <TechCard tech={tech} />
                </div>
              ));
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-4 justify-items-center gap-4 md:hidden">
          {techRows.flat().map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}