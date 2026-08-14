import {Hero} from "./component/Hero.jsx";
import Navbar from "./component/Navbar.jsx";
import Features from "./component/Features.jsx";
import Story from "./component/Story.jsx";
import About from "./component/About.jsx";
import SmoothScroll from "./component/SmoothScroll.jsx";
import Footer from "./component/Footer.jsx";
import Contact from "./component/Contact.jsx";

export default function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">

        <SmoothScroll>

          <Navbar/>
          <Hero/>
          <About/>
          <Features/>
          <Story/>
          <Contact/>
          <Footer/>

        </SmoothScroll>


      </main>
    </>
  );
}



