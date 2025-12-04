import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      company: "Python Kisumu",
      role: "Community Organizer & Technical Lead",
      period: "2024 - Present",
      description:
        "Leading the local Python developer community by organizing meetups, workshops, and collaborative projects. Mentoring junior developers and fostering knowledge sharing.",
      achievements: [
        "Organized weekly online workshops with 15+ attendees",
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
      company: "Zone01 Kisumu",
      role: "Full-Stack Developer (Go & JavaScript)",
      period: "Oct 2023 - Present",
      description:
        "Built and shipped multiple backend and frontend projects as part of Zone01’s intensive modules, focusing on performance, scalability, and clean, maintainable code.",
      achievements: [
        "Developed RESTful APIs using Go (net/http, Gorilla, JWT auth) for real-world module projects",
        "Built dynamic frontends using Vanilla JavaScript, HTML, and CSS without frameworks to master core JS fundamentals",
        "Implemented real-time features and authentication systems in multiple Go + JS projects",
        "Designed and optimized PostgreSQL schemas for production-style applications",
        "Collaborated in peer-to-peer code reviews and system design sessions following Zone01’s industry-simulated workflow",
      ],
      technologies: [
        "Go (Golang)",
        "JavaScript (Vanilla)",
        "HTML",
        "CSS",
        "PostgreSQL",
        "SQLite3",
        "Git",
        "REST APIs",
      ],
    },
    {
      company: "British High Commission Upper Hill",
      role: "IT Support & Equipment Technician Intern",
      period: "Feb 2023 - May-2023",
      description:
        "Provided hands-on IT maintenance and asset management support.",
      achievements: [
        "Performed diagnostics, maintenance, and setup of computer systems and peripherals",
        "Sorted, labeled, and managed IT equipment inventory",
        "Assisted with basic network and workstation troubleshooting",
        "Supported end users with hardware and system issues",
      ],
      technologies: [
        "Windows",
        "Computer Hardware",
        "Networking Basics",
        "IT Asset Management",
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
      </div>
    </section>
  );
}
