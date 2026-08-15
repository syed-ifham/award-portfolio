import {Card,CardTilt} from "../component/Card.jsx";
import {TiLocationArrow} from "react-icons/ti";

function Projects() {
  return (
    <section id="projects" className="bg-black pb-52">
      {/* Changed `container mx-auto px-3 md:px-10` -> `w-full px-4 md:px-8` */}
      <div className="w-full px-4 md:px-8">

        {/* Section Header */}
        <div className="py-32 px-2">
          <p className="font-circular-web text-lg text-blue-50">
            Into the MegaGame
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        {/* Feature 1: Main Full-Width Card */}
        <CardTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Card
            src="videos/feature-1.mp4"
            title={
              <>
                <b>Tech Stack</b>
              </>
            }
            description="Full Software Engineer | Hands On Experience with major engineering tools"
          />
        </CardTilt>

        {/* Bento Grid */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">

          {/* 1. Tall Left Card (Spans 2 rows) */}
          <CardTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <Card
              src="videos/feature-2.mp4"
              title={<><b>Z</b>igma</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </CardTilt>

          {/* 2. Top Right Card (ms-32 on mobile, md:ms-0 on desktop) */}
          <CardTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <Card
              src="videos/feature-3.mp4"
              title={<><b>N</b>exus</>}
              description="A gamified social hub connecting agents across realms and protocols."
            />
          </CardTilt>

          {/* 3. Middle Right Card (me-14 on mobile, md:me-0 on desktop) */}
          <CardTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <Card
              src="videos/feature-4.mp4"
              title={<><b>A</b>zul</>}
              description="A cross-world AI agent elevating your gameplay and everyday tasks."
            />
          </CardTilt>

          <CardTilt className="border-hsla relative overflow-hidden rounded-md col-span-1 row-span-1">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>
              <TiLocationArrow className="m-5 scale-[6] self-end "/>
            </div>
          </CardTilt>

          <CardTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              muted
              loop
              autoPlay
              className="size-full object-cover object-center"
            >

            </video>
          </CardTilt>

        </div>

      </div>
    </section>
  );
}

export default Projects;