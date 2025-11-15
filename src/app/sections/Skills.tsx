export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SPA Architecture",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Django",
        "Django REST Framework",
        "Go",
        "Rust (basics)",
        "PostgreSQL",
        "SQLite",
        "RESTful APIs",
        "API Design",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Nginx",
        "Vercel",
        "Netlify",
        "Linux",
        "Shell Scripting",
      ],
    },
    {
      title: "Collaboration & Version Control",
      skills: [
        "Git",
        "GitHub",
        "Jira",
        "Trello",
        "Agile/Scrum",
        "Code Review",
        "Technical Documentation",
        "Team Leadership",
      ],
    },
    {
      title: "Blockchain & Web3",
      skills: [
        "Stellar SDK",
        "Freighter Wallet",
        "Smart Contracts",
        "Testnet Development",
        "USDC Integration",
        "DApp Development",
      ],
    },
    {
      title: "Other Technologies",
      skills: [
        "REST APIs",
        "JSON",
        "OAuth",
        "JWT",
        "WebSockets",
        "Performance Optimization",
        "Security Best Practices",
        "Testing & QA",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          Technical Skills
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
          A comprehensive toolkit for building modern, scalable web applications
          from frontend to deployment.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow duration-700 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1.5 text-sm font-medium text-gray-800 transition-all duration-200 hover:border-blue-400 hover:shadow-md dark:border-gray-600 dark:from-gray-700 dark:to-gray-600 dark:text-gray-200 dark:hover:border-cyan-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Always learning and exploring new technologies to deliver the best
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
