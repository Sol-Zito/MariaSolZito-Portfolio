import { Suspense, lazy, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";
const Projects = lazy(() => import("./components/Projects"));
import Experience from "./components/Experience";
import Courses from "./components/Courses";
import ButtonTop from "./components/ButtonTop";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-hidden">
        <Navbar />
        <div className={`flex justify-center items-start w-full`}>
          <Hero />
        </div>
        <div className="bg-secondaryLinear pb-5">
          <Skills />
          <Experience />
        </div>
        <Education />
        <Courses />
        <Projects />
        <Footer />
        <ButtonTop />
      </div>
    </Suspense>
  );
};

export default App;
