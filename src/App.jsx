import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative overflow-hidden">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Journey />

        <Skills />

        <Projects />

        <Certificates />

        <HireMe />

        <Contact />

      </main>

    </div>
  );
}

export default App;