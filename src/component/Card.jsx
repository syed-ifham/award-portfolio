import { useRef, useState } from "react";

export function Card({ src, title, description }) {
  return (
    <div className="relative size-full overflow-hidden rounded-md">
      {/* Background Video */}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover"
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content Container with 3D Depth Pop */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 [transform:translateZ(30px)]">
        <h1 className="bento-title special-font drop-shadow-md">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base opacity-90 drop-shadow">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export function CardTilt({ children, className = "", tiltStrength = 15 }) {
  const [transformStyle, setTransformStyle] = useState("");
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    // Mouse coordinates relative to card center (-0.5 to 0.5)
    const relativeX = (event.clientX - left) / width - 0.5;
    const relativeY = (event.clientY - top) / height - 0.5;

    // Calculate dynamic tilt angles
    const tiltX = relativeY * -tiltStrength; // Inverted for natural depth tilt
    const tiltY = relativeX * tiltStrength;

    // Dynamic 3D transform string
    setTransformStyle(
      `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Update dynamic mouse light spot coordinates (0% to 100%)
    setGlowStyle({
      opacity: 1,
      x: ((event.clientX - left) / width) * 100,
      y: ((event.clientY - top) / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlowStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={itemRef}
      className={`relative overflow-hidden [transform-style:preserve-3d] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {/* Interactive Tilt Spotlight / Holographic Light Beam */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500 ease-out"
        style={{
          opacity: glowStyle.opacity,
          background: `radial-gradient(600px circle at ${glowStyle.x}% ${glowStyle.y}%, rgba(255, 255, 255, 0.18), transparent 40%)`,
        }}
      />

      {children}
    </div>
  );
}