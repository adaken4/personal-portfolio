import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/types";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      tagline: "Showcasing my full-stack expertise and design approach",
      description:
        "A Next.js-based personal portfolio showcasing my projects and skills. Built with Next.js, TypeScript, and Tailwind CSS, featuring a responsive design and smooth animations.",
      image:
        "https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      role: "Solo Developer",
      challenges:
        "Designed a responsive portfolio with a clean and modern UI, ensuring a seamless user experience across devices.",
      results:
        "Active development with focus on user-centric design and smooth animations.",
      liveUrl: "#",
      githubUrl: "https://github.com/adaken4/personal-portfolio",
    },
    {
      title: "Koru Mission Hospital Website",
      tagline:
        "Digital presence and community information hub for a Level 4 hospital",
      description:
        "Delivered a professional, mobile-responsive website to enhance Koru Mission Hospital's community outreach and patient access to essential services (e.g., Appointments, Services, Contact info). This was a paid client project.",
      image:
        "https://images.pexels.com/photos/4989149/pexels-photo-4989149.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Django", "HTML5", "BootStrap 5", "Ubuntu VPS"],
      role: "Team Lead / Full-Stack Developer (Team of 5)",
      challenges:
        "Managing a 5-person team workflow, ensuring a smooth handoff for client content updates, and optimizing site performance for various access methods common in the region.",
      results:
        "Successful launch resulted in a modern digital footprint, significantly improving community access to hospital information and service details.",
      liveUrl: "https://korumissionhospital.co.ke",
      githubUrl: "#",
    },
    {
      title: "Django Girls Kisumu (Community Organizer)",
      tagline:
        "Empowering women in the Kisumu community with Python and Django skills.",
      description:
        "As a key organizer and facilitator for the Django Girls workshop, I managed event logistics, secured local sponsors, and personally mentored attendees. This initiative focuses on bridging the gender gap in technology by providing free, hands-on programming education.",
      image:
        "https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder: Group of people coding in a workshop
      tech: [
        "Python",
        "Django",
        "Event Management",
        "Mentorship",
        "Public Speaking",
      ],
      role: "Lead Organizer & Technical Mentor",
      challenges:
        "Coordinating a volunteer team, managing resource allocation (venue, catering, equipment), and ensuring a supportive and effective learning environment for first-time programmers.",
      results:
        "Successfully organized workshops resulting in women (and men) of all ages receiving introductory training in web development, contributing to the growth of the local Python community.", // *** FILL IN NUMBER ***
      liveUrl: "https://djangogirls.org/en/kisumu/",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          Featured Projects
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
          A selection of projects showcasing full-stack development, and
          user-centered design experience.
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
