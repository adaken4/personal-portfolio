import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-800">
      <main>
        <Hero />
      </main>
    </div>
  );
}
