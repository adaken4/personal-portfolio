import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-800">
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
