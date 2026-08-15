export default function TechCard({ tech }) {
  const Icon = tech.icon;

  return (
    <div
      className="group flex h-[78px] w-[72px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white/25 hover:bg-white/[0.06] sm:h-[86px] sm:w-[80px] md:h-[92px] md:w-[84px]"
    >
      {Icon ? (
        <Icon
          className="text-[20px] transition-transform duration-300 group-hover:scale-110 sm:text-[22px] md:text-[24px]"
          style={{ color: tech.color }}
        />
      ) : (
        <img
          src={tech.image}
          alt={tech.name}
          className="h-[20px] w-[20px] object-contain transition-transform duration-300 group-hover:scale-110 sm:h-[22px] sm:w-[22px] md:h-[24px] md:w-[24px]"
        />
      )}

      <span className="mt-2 text-center text-[8px] font-medium text-white/75 sm:text-[9px] md:text-[10px]">
        {tech.name}
      </span>
    </div>
  );
}