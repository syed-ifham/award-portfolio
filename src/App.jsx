import {Hero} from "./features/Hero.jsx";
import Navbar from "./features/Navbar.jsx";
import Projects from "./features/Projects.jsx";
import Fun from "./features/Fun.jsx";
import About from "./features/About.jsx";
import SmoothScroll from "./component/SmoothScroll.jsx";
import Footer from "./features/Footer.jsx";
import Contact from "./features/Contact.jsx";

export default function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">

        <SmoothScroll>

          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Fun/>
          <Contact/>
          <Footer/>

        </SmoothScroll>


      </main>
    </>
  );
}



