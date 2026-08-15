import { useEffect, useRef } from "react";
import { FaDiscord, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_SOCIAL_LINKS = [
  { href: "https://discord.com", icon: <FaDiscord size={22} /> },
  { href: "https://twitter.com/ifhamINstyle", icon: <FaTwitter size={22} /> },
  { href: "https://instagram.com/onlyifham", icon: <FaInstagram size={22} /> },
  { href: "https://linkedin.com/in/syedifham", icon: <FaLinkedin size={22} /> },
];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const footerRef = useRef(null);
  const videoBgRef = useRef(null);
  const leftHeadingRef = useRef(null);
  const rightHeadingRef = useRef(null);
  const overlayVignetteRef = useRef(null);
  const centerGlowRef = useRef(null);
  const topBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitLetters = footerRef.current.querySelectorAll(".footer-char");

      // 1. Text entrance animation (Extended duration & smooth power4 ease)
      gsap.fromTo(
        splitLetters,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.035,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Top bar fade & slide-in reveal
      gsap.fromTo(
        topBarRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Ambient Center Glow Expansion & Brightness Bloom
      gsap.fromTo(
        centerGlowRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 2, // Smooth, weighted scrub delay
          },
        }
      );

      // 4. Parallax zoom on background video
      gsap.fromTo(
        videoBgRef.current,
        { scale: 1.22, force3D: true },
        {
          scale: 1,
          force3D: true,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.8,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Performance-optimized cursor updates
  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    footerRef.current.style.setProperty("--mouse-x", `${x}px`);
    footerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const renderSplitText = (text) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className="footer-char  inline-block will-change-transform"
      >
        {char}
      </span>
    ));

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="group relative w-full min-h-[90vh] md:min-h-screen bg-[#050505] text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden select-none border-t border-white/10"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoBgRef}
          src="/videos/footer-1.mp4"
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center transform-gpu will-change-transform"
        />

        {/* Base dark tint */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Dynamic Center Ambient Glow (Animated by GSAP) */}
        <div
          ref={centerGlowRef}
          className="absolute inset-0 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255, 255, 255, 0.14) 0%, rgba(5, 5, 5, 0.45) 55%, rgba(5, 5, 5, 0.95) 100%)",
          }}
        />

        {/* Edge Vignette */}
        <div
          ref={overlayVignetteRef}
          className="absolute inset-0 bg-gradient-to-b from-black/85 via-transparent to-black/95"
        />
      </div>

      {/* 2. Low-Medium Sweet Whitish Invisible Spotlight (Extended 1.2s ease-out) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"
        style={{
          background:
            "radial-gradient(550px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 45%, rgba(255, 255, 255, 0) 80%)",
        }}
      />

      {/* 3. Top Section: Links & Mission statement */}
      <div
        ref={topBarRef}
        className="relative z-20 flex flex-col lg:flex-row justify-between items-start gap-8 pt-2 will-change-transform"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 text-neutral-300">
            {FOOTER_SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
            <span className="text-base text-neutral-400 font-mono tracking-wider ml-2">
              ©IFHAM {CURRENT_YEAR}
            </span>
          </div>
        </div>

        <p className="hidden md:block max-w-md font-robert-medium text-xl! text-neutral-300 leading-relaxed font-light">
          Every pixel has purpose. Every line has intent.
        </p>
      </div>

      {/* 4. Bottom Large Typography Headings */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start lg:items-end w-full text-white pb-2 lg:pb-0 gap-1 lg:gap-0">
        <h2
          ref={leftHeadingRef}
          className="text-[clamp(2.8rem,14vw,3.5rem)] lg:text-[clamp(3.5rem,12vw,14rem)] 2xl:text-[15rem] font-bold leading-[0.88] lg:leading-[0.82] tracking-[-0.04em] lg:tracking-[-0.05em] uppercase overflow-hidden drop-shadow-2xl select-none"
        >
          {renderSplitText("IFHAM")}
        </h2>
        <h2
          ref={rightHeadingRef}
          className="text-[clamp(2.8rem,14vw,3.5rem)] lg:text-[clamp(3.5rem,12vw,14rem)] 2xl:text-[15rem] font-bold leading-[0.88] lg:leading-[0.82] tracking-[-0.04em] lg:tracking-[-0.05em] uppercase overflow-hidden drop-shadow-2xl select-none lg:text-right"
        >
          {renderSplitText("HUSSAIN")}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;