import {useRef} from "react";
import gsap from "gsap";
import AnimatedTitle from "../component/AnimatedTitle.jsx";
import RoundedCorners from "../component/RoundedCorners.jsx";
import Button from "../component/Button.jsx";

function Fun() {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  }

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 50,
      ease: "power3.intOut",
    });
  };

  return (
    <section id="fun" className="h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Every compile is a battle. Every deployment is a victory.
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="I <b>donot</b> <b>stop</b> <b>when</b> <b>code</b> <b>breaks</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                {/*<img*/}
                {/*  ref={frameRef}*/}
                {/*  onMouseMove={handleMouseMove}*/}
                {/*  onMouseLeave={handleMouseLeave}*/}
                {/*  onMouseUp={handleMouseLeave}*/}
                {/*  src="/img/arcane-4.jpg"*/}
                {/*  alt="entrance"*/}
                {/*  className="object-contain"*/}
                {/*/>*/}
                <video
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    src="/videos/about-1.mp4"
                    autoPlay loop muted
                    className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fun;