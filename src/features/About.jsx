import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../component/AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="me" className="min-h-screen w-full">
      {/* Top Text Header */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] tracking-widest text-gray-500">
          git commit -m "welcome to my portfolio"
        </h2>

        <AnimatedTitle
          title="<b>sudo </b> m<b>a</b>ke <b>me</b> <b>a</b> de<b>ve</b>l<b>op<b/>er"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Coding's the game. Let's ignite the flame.</p>
          <p>Code. Crash. Conquer.</p>
          <p className="text-gray-500 font-semibold mt-1">~ IFHAMUEL</p>
        </div>
      </div>

      {/* Pinned Scroll Container */}
      <div className="h-dvh w-full" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/tech-stack-2.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />

        </div>
      </div>
    </div>
  );
}