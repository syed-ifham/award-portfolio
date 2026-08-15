import {useEffect, useRef, useState} from "react";
import Button from "../component/Button.jsx";
import {TiLocationArrow} from "react-icons/ti";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import HeroContent from "../component/HeroContent.jsx";
import HeroCornerText from "../component/HeroCornerText.jsx";
import {BLOB_URL} from "../../public/constant/videos.js";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  }
  const getVideoSrc = (index) => `${BLOB_URL}hero-${index}.mp4`;
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }


  useEffect(() => {
    if (loadedVideos > 0) {
      setLoading(false);
    }

  }, [loadedVideos]);

  useGSAP(() => {
      if (hasClicked) {
        gsap.set("#next-video", {visibility: "visible"});
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    });

  useGSAP(() => {
    gsap.set("#video-frame", {
      // clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div id="home" className=" relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      {/* Foreground/Video Container */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Mini Preview Video */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          {/* Transitioning Video */}
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          {/* Main Background Video */}
          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Foreground Content */}
        <HeroContent
          textColor="text-blue-50"
          buttonClass="bg-pink-jinx"
          buttonId="watch-trailer"
          zIndex="z-40"
          fn={handleMiniVdClick}
        />

        {/* Foreground Bottom Right Heading */}
        <HeroCornerText textColor="text-blue-75" zIndex="z-40" />
      </div>

      {/* Background Content */}
      <HeroContent
        textColor="text-black"
        buttonClass="!bg-black text-blue-75"
        buttonId="watch-trailer-bg"
        zIndex="z-0"
      />

      {/* Background Bottom Right Heading */}
      <HeroCornerText textColor="text-black" zIndex="z-0" />
    </div>
  );
}