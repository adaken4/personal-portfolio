import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/types";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "CleanTown",
      tagline: "Community-driven cleanliness tracking platform",
      description:
        "A full-stack web application that empowers communities to report, track, and resolve environmental cleanliness issues. Built with Django REST Framework backend and React frontend, featuring real-time updates, user authentication, and SQLite persistence.",
      image:
        "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Django", "React", "SQLite", "REST API", "Tailwind CSS"],
      role: "Solo Developer",
      challenges:
        "Designed an intuitive reporting system with geolocation support and implemented efficient data models for tracking issue resolution over time.",
      results:
        "Active development with focus on community engagement and scalability.",
      liveUrl: "#",
      githubUrl: "https://github.com/kennedyada",
    },
    {
      title: "SolarShare",
      tagline: "Decentralized energy sharing on Stellar blockchain",
      description:
        "A Next.js-based platform enabling peer-to-peer energy trading using Stellar blockchain. Users can list surplus solar energy, browse available offers, and complete transactions using USDC on the Stellar testnet.",
      image:
        "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: [
        "Next.js",
        "TypeScript",
        "Stellar SDK",
        "Freighter Wallet",
        "USDC",
      ],
      role: "Full-Stack Developer",
      challenges:
        "Integrated Freighter wallet authentication, handled testnet transactions securely, and created an intuitive UI for complex blockchain operations.",
      results:
        "Successfully deployed on testnet with wallet integration and transaction capabilities.",
      liveUrl: "#",
      githubUrl: "https://github.com/kennedyada",
    },
    {
      title: "CoursePayment Flow",
      tagline: "Educational platform with crypto payments",
      description:
        "A React-based course enrollment system with Stellar blockchain integration. Students can browse courses and pay using USDC via Freighter wallet on the testnet, demonstrating real-world Web3 payment flows.",
      image:
        "https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Stellar SDK", "Freighter Wallet", "TypeScript"],
      role: "Frontend Developer",
      challenges:
        "Implemented secure wallet connection flow, transaction confirmation feedback, and error handling for various blockchain scenarios.",
      results:
        "Functional testnet demo showcasing seamless crypto payment experience.",
      liveUrl: "#",
      githubUrl: "https://github.com/kennedyada",
    },
    {
      title: "Portfolio Tracker",
      tagline: "Investment simulation and tracking system",
      description:
        "A comprehensive portfolio management application where users can simulate stock trades, track performance metrics, and analyze investment history. Built with Django REST Framework backend and React frontend with persistent SQLite storage.",
      image:
        "https://images.pexels.com/photos/7681681/pexels-photo-7681681.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Django REST", "React", "SQLite", "Chart.js", "Financial APIs"],
      role: "Full-Stack Developer",
      challenges:
        "Integrated real-time stock data APIs, implemented complex portfolio calculations, and designed efficient database schema for transaction history.",
      results:
        "Complete CRUD functionality with data visualization and performance analytics.",
      liveUrl: "#",
      githubUrl: "https://github.com/kennedyada",
    },
  ];

  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          Featured Projects
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
          A selection of projects showcasing full-stack development, blockchain
          integration, and user-centered design.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
