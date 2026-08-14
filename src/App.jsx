import {Hero} from "./component/Hero.jsx";
import Me from "./component/About.jsx";
import Navbar from "./component/Navbar.jsx";
import Features from "./component/Features.jsx";
import Story from "./component/Story.jsx";
import About from "./component/About.jsx";

export default function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">

        <Navbar/>
        <Hero/>
        <About />
        <Features/>
        <Story/>


      </main>
    </>
  );
}



