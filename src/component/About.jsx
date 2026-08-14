import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
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
    <div id="me" className="min-h-screen w-screen">

      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">

        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Hey there, Welcome to ifham portfolio
        </h2>

        <AnimatedTitle title="Ex<b>p</b>l<b>or</b>e <b>t</b>he port<b>folio</b>" containerClass="mt-5 !text-black text-center"/>

        <div className="about-subtext">
          <p>Let's go back to beginning of my life,</p>
          <p> EPIC IFHAM</p>
          <p>Tech Stack</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">

          <img
            src="img/tech-stack-2.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />

        </div>

      </div>

    </div>
  )
}

