import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      company: "Python Kisumu",
      role: "Community Organizer & Technical Lead",
      period: "2023 - Present",
      description:
        "Leading the local Python developer community by organizing meetups, workshops, and collaborative projects. Mentoring junior developers and fostering knowledge sharing.",
      achievements: [
        "Organized monthly technical workshops with 50+ attendees",
        "Mentored 15+ developers in Python and Django best practices",
        "Built collaborative open-source projects with the community",
        "Created educational content and technical documentation",
      ],
      technologies: [
        "Python",
        "Django",
        "Community Building",
        "Technical Mentorship",
      ],
    },
    {
      company: "CleanTown (Personal Project)",
      role: "Full-Stack Developer & Product Owner",
      period: "2024 - Present",
      description:
        "Designing and developing a community-driven platform for environmental issue tracking and resolution. Leading all aspects from architecture to deployment.",
      achievements: [
        "Architected scalable REST API with Django REST Framework",
        "Implemented real-time issue tracking with geolocation features",
        "Built responsive React frontend with modern UX patterns",
        "Designed efficient database schema for community data",
      ],
      technologies: ["Django", "React", "PostgreSQL", "REST API", "Docker"],
    },
    {
      company: "Blockchain Projects",
      role: "Web3 Developer",
      period: "2023 - 2024",
      description:
        "Specialized in developing decentralized applications on the Stellar blockchain, focusing on payment integrations and wallet connectivity.",
      achievements: [
        "Integrated Freighter wallet with multiple React applications",
        "Implemented USDC payment flows on Stellar testnet",
        "Built energy sharing platform with smart contract integration",
        "Created educational course payment system with crypto transactions",
      ],
      technologies: [
        "Stellar SDK",
        "Next.js",
        "TypeScript",
        "Freighter Wallet",
        "Web3",
      ],
    },
    {
      company: "Freelance Development",
      role: "Full-Stack Developer",
      period: "2022 - 2023",
      description:
        "Delivered custom web applications for various clients, focusing on scalable architecture and clean code practices.",
      achievements: [
        "Built 10+ full-stack applications from concept to deployment",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Optimized database queries improving performance by 40%",
        "Maintained 98% client satisfaction rate",
      ],
      technologies: [
        "Django",
        "React",
        "PostgreSQL",
        "Docker",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          Professional Experience
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
          A track record of building impactful applications and leading
          technical initiatives.
        </p>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 md:block dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400"></div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">
            <h3 className="mb-2 text-2xl font-bold">
              Python Institute Certification
            </h3>
            <p className="mb-1 text-lg">
              PCEP - Certified Entry-Level Python Programmer
            </p>
            <p className="text-blue-100">Python Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}
