import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import logo from "./logo.svg";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header className="relative">
        <Navigation />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
