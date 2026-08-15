import TechCard from "./TechCard";
import { techRows } from "../../../public/constant/techData";
import {videos} from "../../../public/constant/videos.js";

export default function TechStack() {
  const MAX_COLS = Math.max(...techRows.map((row) => row.length));

  return (
    <section className="relative isolate overflow-hidden rounded-[30px] border border-white/10 bg-black py-14 text-white md:rounded-[36px] md:py-18">
      {/* Background Video */}
      <video
        src={videos.hero4}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/15 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.18)_70%,rgba(0,0,0,.55)_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-[11px]">
          EVERY COMPILE IS A BATTLE
        </p>

        <h2 className="mb-10 text-center font-[Bebas_Neue] text-5xl uppercase tracking-[0.05em] text-white/90 sm:text-6xl md:mb-14 md:text-7xl">
          TECH STACK
        </h2>

        {/* Desktop */}
        <div className="hidden md:block">
          <div
            className="grid justify-center gap-y-4"
            style={{
              gridTemplateColumns: `repeat(${MAX_COLS}, 84px)`,
              columnGap: "14px",
            }}
          >
            {techRows.flatMap((row) => {
              const start = Math.floor((MAX_COLS - row.length) / 2) + 1;

              return row.map((tech, i) => (
                <div
                  key={tech.name}
                  style={{ gridColumn: start + i }}
                >
                  <TechCard tech={tech} />
                </div>
              ));
            })}
          </div>
        </div>

        {/* Mobile + Tablet */}
        <div className="grid grid-cols-4 justify-items-center gap-3 md:hidden">
          {techRows.flat().map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}