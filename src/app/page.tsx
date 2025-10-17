import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-800">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
